const{userSchema} = require("../models");

const addUser = (body)=>{
    return userSchema.create(body);
}

const getUser =()=>{
    return userSchema.find();
}
const findUser = (email)=>{
    return userSchema.findOne({email:email})
}
 const getUserByEmail = (email)=>{
    return userSchema.findOne({email})
 }

 module.exports = {
    addUser,
    getUser,
    findUser,
    getUserByEmail
 }