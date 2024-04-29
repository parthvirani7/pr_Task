const express = require("express");
const route = express.Router();
const { postController } = require("../controllers");

route.get("/get",postController.getPost);
route.post("/add",postController.addPost);

route.post("/delete/:id",postController.deletePost);

module.exports = route;