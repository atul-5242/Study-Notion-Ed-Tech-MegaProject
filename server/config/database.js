const mongoose = require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGO_URl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB Connected Successfully."))
    .catch((error)=>{
        console.log("DB Connection failed ");
        console.error(error);
        process.exit(1);
    })
}