const express = require("express");
const route = express.Router();
const { userController } = require("../controllers");

route.get("/get",userController.getUser);
route.post("/add",userController.addUser);
route.post("/login",userController.loginUser);



module.exports = route;