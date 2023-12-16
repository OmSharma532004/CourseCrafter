
import React from "react";
import {FaArrowRight} from "react-icons/fa"
import { Link } from "react-router-dom";
import HighlightText from "../Components/core/HomePage/HighLigthText"
import CTAButton from "../Components/core/HomePage/button";
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../Components/core/HomePage/CodeBlocks";
import TimelineSection from "../Components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../Components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../Components/core/HomePage/InstructorSection";
import ExploreMore from "../Components/core/HomePage/ExploreMore"; 

import Footer from "../Components/core/HomePage/Footer";
const Home= () => {
 
    return(
        <div>
            
            {
                //section 1
                <div className="relative mx-auto flex flex-col max-w-maxContent w-11/12  items-center justify-between text-white  ">

                    <Link to={"/signup"}>
                        <div className="mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                               transition-all duration-200 hover:scale-95 w-fit ">
                            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                            transition-all duration-200 group-hover:bg-richblack-900">
                                <p>Become an Instuctor</p> <FaArrowRight/> 
                               
                            </div>
                        </div>
                    </Link>

                    <div className="text-4xl text-center font-semibold mt-7 ">
                        Empower your future with 
                        <HighlightText text={"Coding Skills"}/>
                    </div>

                    <div className=" mt-4  w-[90%]  text-center text-lg font-bold text-richblack-300">
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including
hands-on projects, quizzes, and personalized feedback from instructors.

                    </div>

                    <div className="flex gap-7 mt-6 rounded-full">
                        <CTAButton linkto={"/signup"} active={true}>
                            Learn More
                        </CTAButton>

                        <CTAButton linkto={"/login"} active={false}>
                            Book a Demo

                        </CTAButton>
                    </div>
                    
                    <div className="mx-3 my-12 shadow-blue-200   w-[70%] relative">
              
                  
                   <video className=""  muted loop autoPlay>
                         <source src={Banner} type="video/mp4"></source> 

                        </video>
                
                        
                    </div>

                    <div>
                    <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className=' font-semibold text-2xl lg:text-4xl sm:w-full'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "Try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                codeColor={"white"}
                backgroudGradient={"grad"}
            />
                        
                    </div>

                    <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start
                        <HighlightText text={"coding in seconds"}/>
                    </div>
                }
                subheading = {
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                codeColor={"text-yellow-25"}
                backgroudGradient={"grad2"}
            />
        </div>
        <ExploreMore/>

                    </div>


            }
            {
                //section2
                <div className="bg-pure-greys-5 text-richblack-700  h-auto">

          <div className='home-bg h-[310px] mb-10'>

<div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
    <div className='h-[150px]'></div>
    <div className='flex flex-row gap-7 text-white '>
        <CTAButton active={true} linkto={"/catalog/Web Developement"}>
            <div className='flex items-center gap-3' >
                Explore Full Catalog
                <FaArrowRight />
            </div>
            
        </CTAButton>
        <CTAButton active={false} linkto={"/signup"}>
            <div>
                Learn more
            </div>
        </CTAButton>
    </div>

</div>


          </div>

          <div className=" mt-[100px] mb-[50px] ml-[15%] w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
            <div className="flex gap-5 ">
                <div className="text-4xl font-semibold w-[45%]">
                    Get the Skills you need for a 
                    <HighlightText text={"Job That is in demand"}/>
                </div>
                <div className="  flex flex-col gap-10 w-[40%] items-start">
                   <div className="text-[16px]"> The modern StudyNotion is the dedicates its own terms. Today, to be a competitive 
                    specialisy require more than professional skills.</div>
                    <div>
                        <CTAButton linkto={'/signup'} active={true}>Learn More</CTAButton>
                    </div>

                </div>

            </div>
          </div>
          <div className=" mt-[100px] mb-[50px] ml-[7%] w-11/12 max-w-maxContent flex flex-col justify-center items-center">
          <TimelineSection/>
          <LearningLanguageSection/>
          
          </div>
      
         

        

          
                </div>
                

                

            }
            {
                <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between
                 gap-8 first-letter bg-richblack-900 text-white">
                    
                    <InstructorSection/>

                    <h2 className="text-center text-4xl font-semibold mt-10">Review of other Learners</h2>

                    
                </div>
                
                

            }
            {
                //footer
                <div className="text-white   w-full bg-richblack-700">
                         <div className=" mt-[100px] mb-[50px] ml-[7%] w-11/12 max-w-maxContent flex flex-col justify-center  text-4xl text-richblack-100 items-center text-center  pt-[30px]">OTHER LINKS</div>
                    <Footer/>
                </div>

                

            }
        </div>
    )
 

}

export default Home;