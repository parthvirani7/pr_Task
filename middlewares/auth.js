const jwt = require("jsonwebtoken");
const secret = "secret key";

const createToken = (data)=>{
    const token = jwt.sign({data},secret)
    return token
}

const verifyToken = (user_token)=>{
    const token = jwt.verifyToken(data)
}


module.exports = {
    createToken,
    verifyToken
}