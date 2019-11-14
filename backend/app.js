'use strict';
'use strict';
const appPackage = require(__dirname + '/package.json');
const Hapi = require('hapi');
const colors = require('colors/safe');
const Config = require('config');
const utils = require('./services/utils/utils.js');
const db = require('./services/utils/db.js');
const responsePreCheck = require('./services/utils/formatter').responsePreCheck;



async function start() {

    try {
        db.connect();

        utils.addModels();

        const server = new Hapi.Server(Config.util.toObject(Config.get('server.connection')));

        /**
         * Handles the options request and allows views
         * and swagger through
         */
        server.ext('onPreResponse', function (req, h){

            // Let the swagger stuff go through
            if(req.response.variety === 'plain' && req.path !== '/swagger.json'
                || req.response.isBoom){
                return responsePreCheck(req, h);
            }
            return h.continue;
        });

        await utils.addPolicies(server);

        utils.addRoute(server);

        await server.start()
        console.log(colors.green('%s %s started on %s'), appPackage.name, appPackage.version, server.info.uri);

        module.exports = server;

    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

start()
