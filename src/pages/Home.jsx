import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import HighlightedText from '../components/cores/HomePage/HighlightedText';
import ButtonComponent from '../components/cores/HomePage/ButtonComponent';
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/cores/HomePage/CodeBlocks';
import Elipse_Orange from '../assets/gradient/Ellipse2.png'
import Elipse_Blue from '../assets/gradient/Ellipse2__.png'
import TimeLineSection from '../components/cores/HomePage/TimeLineSection';
import image1 from '../assets/Images/Know_your_progress.png';
import image2 from '../assets/Images/Compare_with_others.png';
import image3 from '../assets/Images/Plan_your_lessons.png';
import Footer from '../components/common/Footer';
import InstructorSection from '../components/cores/HomePage/InstructorSection';
import ExploreSection from '../components/cores/HomePage/ExploreSection';

// import h from '../assets/Images/bghome.svg'
const Home = () => {
  return (
    <div className=''>
        {/*-------------------------------- Section 1 -------------------------- */}
        
<div className='flex flex-col gap-2 justify-center items-center'>


                        {/* Button Of Become an Instructor  */}
                        <Link to={"/signup"} >
                        <div  className=' group flex flex-row text-richblack-200 mt-14 border rounded-2xl p-3 items-center
                        gap-2 hover:text-white transition-all duration-500
                            bg-richblack-800 border-richblack-600 shadow-lg shadow-blue-700 '>
                                
                                    Become an Instructor 
                                    <TiArrowRight/>
                                </div>
                            </Link>

                    {/* Heading 1 */}
                        <div className=' text-white flex flex-row mt-5 text-3xl'>
                            Empower Your Future with <span className="ml-1"></span> <HighlightedText text={'Coding Skills'}/>
                        </div>

                    {/* Para 1 */}
                    <div className='text-richblack-300 '>
                        <p className='flex flex-col '>
                            With our online coding courses, you can learn at your own pace, from anywhere in the world,
                            and get access to a 
                            <span className=' flex justify-evenly'>
                            wealth of resources, including hands-on projects, quizzes, and 
                            personalized feedback from instructors.
                                </span> 
                            </p>
                    </div>

                    {/* Buttons above Video */}
                        <div className='flex flex-row gap-4 mt-8'>
                            {/* Button 1 */}

                                <div>
                                    <ButtonComponent active={"yellow"} text={"Learn More"} linkto={"/learnMore"}  />
                                </div>


                            {/* Button 2 */}
                                <div>
                                    <ButtonComponent active={"grey"} text={"Book a Demo"} linkto={"/bookDemo"} />
                                </div>

                        </div>


                    {/* Video */}
                    <div className='bg-white w-[80%] m-16' style={{boxShadow: '0px 0px 80px rgb(10, 90, 114)'}}>
                        <video src={Banner} type="video/mp4" className='px-1 py-1 -translate-x-4 -translate-y-4'
                        autoPlay
                        muted
                        loop
                        />
                    </div>

                    {/* ---------------- */}


                        {/* Code Animation Section 1 */}

                    <div className='flex gap-14 flex-col'>
                    <CodeBlocks   headingP1={
                            <>
                                Unlock your<HighlightedText text={"coding potential"}/>
                            </>
                        }
                        headingP2={
                            <   >
                                with our online courses.
                            </>
                        }

                        subHeading={<>Our courses are designed and taught by industry experts who 
                            <br /> have years of experience in coding and are passionate about <br /> sharing 
                            their knowledge with you.</>}
                        
                        butncontent1={
                            {
                                active:"yellow",
                                text:"Try it Yourself",
                                linkto:"/signup"
                            }
                        }
                        butncontent2={
                            {
                                active:"grey",
                                text:"laern more",
                                linkto:"/signloginup"
                            }
                        }

                        codeBlock={`<!DOCTYPE_html>\n<html>\n<head>\n<title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body><h1><ahref="/">Header</a></h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}

                        codeColor={"text-yellow-25"}

                        position={"flex-row"}
                        backgroundGradient={Elipse_Orange}
                    />
                        
                        
                        <CodeBlocks  backgroundGradient={Elipse_Blue}
                        position={"flex-row-reverse"}
                        headingP1={
                            <>
                                Unlock your<HighlightedText text={"coding potential"}/>
                            </>
                        }
                        headingP2={
                            <   >
                                with our online courses.
                            </>
                        }

                        subHeading={<>Our courses are designed and taught by industry experts who 
                            <br /> have years of experience in coding and are passionate about <br /> sharing 
                            their knowledge with you.</>}
                        
                        butncontent1={
                            {
                                active:"yellow",
                                text:"Try it Yourself",
                                linkto:"/signup"
                            }
                        }
                        butncontent2={
                            {
                                active:"grey",
                                text:"laern more",
                                linkto:"/signloginup"
                            }
                        }

                        codeBlock={`<!DOCTYPE_html>\n<html>\n<head>\n<title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body><h1><ahref="/">Header</a></h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}

                        codeColor={"text-[#D6F4FE]"}

                    
                    
                    />
                </div>

        <div>
            <ExploreSection/>
        </div>

                    
</div>
       
        {/* -----------------------Section 2------------------------- */}
<div>

        {/* white Image Section */}
<div className=" bg-pure-greys-5 text-richblack-700">


    {/* Two Button Section: */}
            <div className='homepage_bg h-[250px]'>
                <div className='w-11/12 max-w-maxContent mx-auto  '>
                    {/* Buttons :*/}
                    <div className='flex flex-row gap-5 justify-center'>
                    {/* Button 1 */}
                    <div className='mt-[10%]'>
                        <ButtonComponent text={"Explore Full Catelog"} active={"yellow"} linkto={"/signup"} />
                    </div>
                    {/* Button 2 */}
                        <div className='mt-[10%]'>
                            <ButtonComponent  text={"Learn More"} active={"grey"} linkto={"/login"}  />
                        </div>
                    </div>

                </div>
            </div>


        {/* TimeLine Section---------------------:  */}
            <div className='w-11/12 max-w-maxContent mx-auto mt-[5%]'>
                <div className=''>
                        {/* TimeLine Section Heading:  */}
                        <div className='flex flex-row gap-32'>
                            {/* main heading */}
                            <div className='font-bold text-4xl'>
                            Get the skills you need for a <HighlightedText text={"job that is in demand."} />
                            </div>
                            {/* para and button*/}
                            <div className='flex flex-col gap-5 w-[40%]'>
                                <div>
                                    <p className=' text-richblack-600'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                                </div>
                                <div className='font-bold w-[25%]'>
                                    <ButtonComponent text={"Learn More"} active={"yellow"} linkto={"/signup"} />
                                </div>
                            </div>
                        </div>
                        {/* TimeLine Main Section */}
                        <div className='w-11/12 max-w-maxContent mx-auto mt-[5%]'>
                            <TimeLineSection/>
                        </div>
                    </div>

                {/* Learning Any Language Section------------: */}
                        <div className='w-11/12 max-w-maxContent mx-auto mt-[10%] justify-center flex flex-col'>

        {/* Heading  */}
            <div className='items-center flex flex-row justify-center font-bold text-4xl'>
                <h1 className='items-center flex flex-row gap-2'>
                Your swiss knife for <HighlightedText className="flex flex-row" text={"learning any language"} />
                </h1>
            </div>
        {/* Para */}
        <div className='flex mx-auto justify-center font-semibold text-richblack-600'>
            <p>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, <br /><span className='flex justify-center'> custom schedule and more.</span>
            </p>
        </div>
        {/* image */}
        <div className='flex flex-row justify-evenly '>
                <div className='scale-[120%] mt-10'>
                    <img src={image1} alt="H"  />
                </div>
                <div className='scale-[120%] -translate-x-10'>
                    <img src={image2} alt="H" />
                </div>
                <div className='scale-[120%]  -translate-x-28'> 
                    <img src={image3} alt="H" />
                </div>
            </div>
        {/* button */}
<div className='w-fit flex justify-center items-center mx-auto mt-10 mb-20'>
                <ButtonComponent text={"Learn More"}  active={"yellow"}  />
            </div>

        </div>
    </div>
  
            
</div>


</div>
        {/* Section 3 */}
        <InstructorSection/>
      

        {/* Section 4 [Footer]*/}
            <div className="bg-[#161D29]">
                <Footer/>
                <div className='absolute bg-richblack-600 h-[2px] w-[75rem] flex left-32 rotate-180 mb-20 mt-4'></div>
                <div className='h-20 flex flex-row text-richblack-200 justify-evenly gap-44 mt-10'>
                        <div className='flex flex-row gap-4'>
                            <div className='border-r-2 h-7 px-3 border-richblack-600 '>Privacy Policy</div>
                            <div className='border-r-2 h-7 px-3 border-richblack-600 '>Cookie Policy</div>
                            <div>Terms</div>
                        </div>
                        <div className=''>
                            Made with ❤️Me(Atul) and Love Bhai © 2023 Studynotion
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Home