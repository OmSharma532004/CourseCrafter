import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HighlightText from "../../HomePage/HighLigthText";
import { EachCourse } from "./EachCourse";
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI";


export const MyCourses=  ()=>{
    const {user,token}=useSelector((state)=>state.auth);
    const dispatch= useDispatch();
    const [courses,setCourses]= useState(null);
    let result=[];
    const getAllCourses= async ()=>{
         result=await fetchInstructorCourses(token);
        setCourses(result);
        
    }
    useEffect(()=>{
        getAllCourses();
    },[]);
     
    return(
        <div>
            <div>
                <h1 className="text-white text-2xl">
               All Courses Published By you
                </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center">
               
               
               
                {
                   
                    courses?(courses.map((course,key)=>{
                        
                   
                       return(
                        <EachCourse key={key} course={course}/>
                       ) 
                    })):(
                        <div>
                            NOT MADE ANY COURSES
                            </div>
                    )
                }
           
                
            </div>

        </div>
    )

}