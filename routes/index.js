const express = require("express");
const route = express.Router();

const userRoute = require("./user.route");
const postRoute = require("./post.route")
route.use("/user",userRoute);
route.use("/post",postRoute);


module.exports = route;
