import React, { useEffect ,useSelector, useState} from "react";
import { getAllCourses } from "../../../../services/operations/courseDetailsAPI";
import { EachCourse } from "../MyCourses/EachCourse";
import { Course } from "./Course";

export const AvailableCourses=()=>{
    const [courses,setCourses]=useState([]);
    

    const allCourse=async()=>{
        const result= await getAllCourses();
        console.log("Courses aagaye- ",result);
        setCourses(result);
    }
    useEffect(()=>{
        allCourse();
        
        
        },[])
        return(
            <div>
                <div>
                    <h1 className="text-white text-2xl">
                   All Courses
                    </h1>
                </div>
                <div className="flex">
                   
                   
                   
                    {
                       
                        courses?(courses.map((course,key)=>{
                            
                       
                           return(
                            <Course key={key} course={course}/>
                           ) 
                        })):(
                            <div>
                                NO COURSES Available
                                </div>
                        )
                    }
               
                    
                </div>
    
            </div>
        )



}