// Importing required models
const express = require("express");
const router = express.Router();

const {auth,isStudent} = require("../middlewares/auth");// Importing Middlewares
// Importing Required Controllers
const {capturePayment,verifySignature} = require("../controllers/Payments");

// *********************************************************************************************************
//                                          Defining router:
// *********************************************************************************************************


router.post("/capturePayment",auth,isStudent,capturePayment);

router.post("/verifySignature",verifySignature);


module.exports = router;