const {postSchema} = require("../models");

const addPost = (body)=>{
    return postSchema.create(body);
}

const getPost = ()=>{
    return postSchema.find();
}

const deletePost =(id)=>{
    return postSchema.findByIdAndDelete(id)
}

module.exports = {
    addPost,
    getPost,
    deletePost
}