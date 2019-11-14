'use strict';
module.exports.responsePreCheck = function(request, h){
    const responseFormatted = responseFormat(request);
    if (!request.headers.origin) {
        return h.response(responseFormatted).code(responseFormatted.statusCode);
    }

    // depending on whether we have a boom or not,
    // headers need to be set differently.
    var response = request.response.isBoom ? request.response.output : request.response;

    response.headers['access-control-allow-origin'] = request.headers.origin;
    response.headers['access-control-allow-credentials'] = 'true';
    if (request.method !== 'options') {
        return h.response(responseFormatted);
    }

    response.statusCode = 200;
    response.headers['access-control-expose-headers'] = 'content-type, content-length, etag';
    response.headers['access-control-max-age'] = 60 * 10; // 10 minutes
    // dynamically set allowed headers & method
    if (request.headers['access-control-request-headers']) {
        response.headers['access-control-allow-headers'] = request.headers['access-control-request-headers'];
    }
    if (request.headers['access-control-request-method']) {
        response.headers['access-control-allow-methods'] = request.headers['access-control-request-method'];
    }
    return h.response(response).code(response.statusCode);
}


const responseFormat = function(req) {


    const error = !(req.response.statusCode < 400 && req.response.statusCode >= 200);

    const responseFormatted = {
        status: error ? 'error' : 'success',
        statusCode: req.response.statusCode ? req.response.statusCode : req.response.output.statusCode,
        data: null,
        error: null
    };


    if(error){
        responseFormatted.error = (req.response.output) ? req.response.output.payload : req.response.source;
        return responseFormatted;
    }
    else {
        responseFormatted.data = req.response.source;
        return responseFormatted;
    }
}
