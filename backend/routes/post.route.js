'use strict';
const Joi = require('joi');
const Boom = require('boom');
const PostController = require('../controllers/posts.controller');

module.exports = [{
    method: 'GET',
    path: '/posts',
    handler: PostController.getAllPosts,
    options: {
        validate: {
            options: {
                abortEarly: false,
                allowUnknown: true
            }
        },
        auth: false
    }
},{
    method: 'GET',
    path: '/posts/user/{id}',
    handler: PostController.getPostsbyUser,
    options: {
        validate: {
            options: {
                abortEarly: false,
                allowUnknown: true
            }
        },
        auth: false
    }
},{
    method: 'POST',
    path: 'posts/user/{id}',
    handler: PostController.createPost,
    options: {
        validate: {
            options: {
                abortEarly: false,
                allowUnknown: true
            }
        },
        auth: false
    }
}

]