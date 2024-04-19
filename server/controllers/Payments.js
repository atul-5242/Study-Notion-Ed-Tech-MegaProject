const {instance} = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {courseEnrollmentEmail} = require("../mail/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");


// capture th payment and initiate the Razorpay order.
exports.capturePayment = async (req,res)=>{
    // get course and UserId:-
    const {course_ID}=req.body
    const userID=req.user.id

    // validation:-
    if(!course_ID){
        return res.json({
            success:false,
            message:"Course Id is not valid",
        });
    }
    // valid course ID and CourseDetails.
    let course;
    try {
        course= await Course.findById(course_ID);
        if(!course){
            return res.json({
                success:false,
                message:"Could not find Course.",
            });
        }
        // user already pay for the same cousre or not.
        const uid=new mongoose.Types.ObjectId(userID);
        if(course.studentEnrolled.includes(uid)){
            return res.status(200).json({
                success:false,
                message:"Student Already Enrolled.",
            });
        }
        
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            success:false,
            message:error.message,
        });
        
    }
    // order create 
    const amount = course.price;
    const currency = "INR";
    
    const options = {
        amount:amount*100,
        currency,
        receipt:Math.random(Date.now().toString()),
        notes:{
            courseID:course_ID,
            userID,
        }
    };
    // return response
    try {
        // initiate the payment using razorpay:-
        const paymentResponse= await instance.orders.create(options);
        console.log(paymentResponse);
        return res.status(200).json({
            success:true,
            cousreName:course.courseName,
            cousreDescription:course.courseDescription,
            thumbnail:course.thumbnail,
            orderId:paymentResponse.id,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Could not initiate the order.",
        })
    }

};

// verify Signature of Razorpay and Server:-

exports.verifySignature = async (req,res) =>{
     const webhookSecret = "123456";

     const signature = req.header["x-razorpay-signature"];

    //  Some Steps for hashing :-
    // Step A B C:-
    const shasum= crypto.createHmac("sha256",webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.disgest("hex");

    if(digest===signature){
        // all action after payment happen here:-
        console.log("Payment is Authorised");
        const {courseId,userId}=req.body.payload.payment.entity.notes;
        try {
            // full fill the action:-

            //    find the course and enroll the Student:-

            const enrolledCourse=await Course.findByIdAndUpdate(
                {_id:courseId},
                {$push:{studentEnrolled:userId}},
                {new:true},
            ); 
            if(!enrolledCourse){
                return res.json({
                    success:false,
                    message:"Could not find Course.",
                });
            }
            console.log(enrolledCourse);
            // find the Student and add the Course to their list enrolled courses me
            const enrolledStudent = await User.findOneAndUpdate(
                {_id:userId},
                {$push:{courses:courseId}},
                {new:true},
            )
            console.log(enrolledStudent);

            // mail send karodo confirmation wala.
            const emailResponse = await mailSender(
                enrolledStudent.email,
                "Congratulation from CodeHelp",
                "Congratulations , you are Onboarded into new Codehelp",
            )
            console.log(emailResponse);
            return res.status(200).json({
                success:true,
                message:"Signature verifed and Course Added.",
            });
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:`Signature can not verifed and Course not be Added. and ERROR:->${error.message}`,
            });
        }
    }
    else{
        return res.status(400).json({
            success:false,
            message:"Invalid Request",
        });
    }
}