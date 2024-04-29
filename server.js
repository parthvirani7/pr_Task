require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/connectDB");
const route = require("./routes");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());

app.use("/v1",route)

connectDB();

http.createServer(app).listen(process.env.PORT,()=>{
    console.log("Server Started Success on " + process.env.PORT);
})

