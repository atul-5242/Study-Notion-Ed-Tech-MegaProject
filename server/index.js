const express = require("express");
const app = express();

const userRoute = require("./routes/User");
const paymentRoute = require("./routes/Payments");
const profileRoute = require("./routes/Profile");
const courseRoute = require("./routes/Coures");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudnairyConnect} = require("./config/cloudnairy");
const fileUpload =require("express-fileupload");
const dotenv = require("dotenv");
    
dotenv.config();
const PORT = process.env.PORT || 5000;
console.log("Hello***************************")

// dataBase Connection.
database.connect();
// middlewares addition:
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:["https://study-notion-ed-tech-mega-project.vercel.app/","https://study-notion-ed-tech-mega-project-38tmjla44.vercel.app/"],
        credentials:true,//Seach about It HW
    })
)

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tem",
    })
)

// Cloudinary Connection:
cloudnairyConnect();

// routes mounting:
app.use("/api/v1/auth",userRoute)
app.use("/api/v1/payment",paymentRoute)
app.use("/api/v1/profile",profileRoute)
app.use("/api/v1/course",courseRoute)

// default route:
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is Up and Running..."
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at : ${PORT}`);
});