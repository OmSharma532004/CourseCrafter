import React, { useEffect, useState } from "react";
import { fetchCourseDetails,getFullDetailsOfCourse } from "../../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";

export const EachCourse= ({course})=>{
    const [course2,setCourse2]= useState();
    const {token}= useSelector((state)=>state.auth);

    

    const getCourseDetail= async()=>{
        const result= await getFullDetailsOfCourse(course._id,token);
        setCourse2(result);

        console.log("Course Detaails aagyi",result);
    }
    useEffect(()=>{
    getCourseDetail();
    },[])
    

    return(
        <div className=" m-5">
            {
                course2?(
                    <div>     <h1 className=" text-white text-xl">COURSE NAME-   {course2.courseName}</h1>
                    <p className=" text-white">{course2.courseDescription}</p></div>
               
                    
                   
                ):(
                    <div>

                    </div>
                )
            }
       
    



        </div>
    )
}