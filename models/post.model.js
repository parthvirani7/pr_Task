const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    geoLocation:{
        type:String,
        required:true
    }

},{
    timestamps:true
});

const post = mongoose.model("postSchema",postSchema);

module.exports = post;
