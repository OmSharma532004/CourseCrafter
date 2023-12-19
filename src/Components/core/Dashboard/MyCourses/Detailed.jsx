import React, { useEffect, useState } from "react";
import { fetchCourseDetails,getFullDetailsOfCourse } from "../../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";


export const Detailed=({course,setDetails})=>{
    const [course2,setCourse2]= useState();
    const {token}= useSelector((state)=>state.auth);

    const handleSelect=()=>{
        setDetails(false);


    }
        const getCourseDetail= async()=>{
        const result= await getFullDetailsOfCourse(course._id,token);
        setCourse2(result);

        console.log("Course Detaails aagyi",result);
       
    }
   
    useEffect(()=>{
    getCourseDetail();
    
    
    },[])
    return(
        <>
        {
            course2?(
                

                <>
               
                <div onClick={handleSelect} className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
                <div className="text-white my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
                    <h1 className=" text-yellow-100 text-center text-3xl">COURSE</h1>
                    <p><b className=" text-yellow-200">NAME-</b> {course2.courseDetails.courseName}</p>
                    <p><b className=" text-yellow-200">Description-</b>{course2.courseDetails.courseDescription}</p>
                    <p><b className=" text-yellow-200">Price-</b>${course2.courseDetails.price}</p>
                    <p><b className=" text-yellow-200">what You Will Learn-</b>{course2.courseDetails.whatYouWillLearn}</p>
                    <p><b className=" text-yellow-200">Instructions-</b>
                    {
                    course2.courseDetails.instructions
                    }
                    </p>
                    <p><b className=" text-yellow-200">Created At- -</b> {course2.courseDetails.createdAt}</p>
                    <p></p>

                </div>
                </div>
                </>
            ):(

                <></>
            )
        }
        </>
    )

        
    


}