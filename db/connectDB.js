const mongoose = require("mongoose");

const connectDB =()=>{
    mongoose.connect(process.env.URI).then(()=>{
        console.log("DB Connect Success");
    }).catch((err)=>{
        console.log("err",err);
    })
}

module.exports = {connectDB}