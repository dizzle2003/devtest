const mongoose = require("mongoose");
const Posts = require("../models/posts.model");

/*
@desc = Creates a Post by a specific user with an ID
@route = GET '/posts/user/{id}'
*/
exports.getPostsbyUser = async (req, res) => {
    const {id} = req.params;
    try{
        const posts = await Posts.findById(id, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            success: true,
            data: posts
        })
    }catch(err){
        res.status(400).json({
            success: false,
            message: `Posts from this user with ${id} cannot be retrieved`
        })
    }
};

/*
@desc = Creates a Post by a specific user with an ID
@route = GET '/posts'
*/
exports.createPost = (req, res) => {
    //Adds user to request body
    req.body.user = req.user;
try {
  const userPost = await Posts.create(req.body);
  res.json(201).json({
    success: true,
    data: userPost,
  });
} catch (err) {
  res.json(400).json({
    success: false,
    err,
  });
};
};


/*
@desc = Gets All Posts made by all users
@route = GET '/posts'
*/
exports.getAllPosts = async(req, res) => {
    try{
        const posts = await Posts.find();
        return res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        })
    }catch(err){
        res.status(400).json({
            success: false,
            err
        })
    }
};

