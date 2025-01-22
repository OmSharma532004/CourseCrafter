import React, { useEffect ,useSelector, useState} from "react";
import { getAllCourses } from "../../../../services/operations/courseDetailsAPI";
import { EachCourse } from "../MyCourses/EachCourse";
import { Course } from "./Course";
import toast from "react-hot-toast";

export const AvailableCourses=()=>{
    const [courses,setCourses]=useState([]);
    

    const allCourse=async()=>{
        const toastId = toast.loading("Loading...")
        const result= await getAllCourses();
        console.log("Courses aagaye- ",result);
        setCourses(result);
        toast.dismiss(toastId);
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
                <div className="flex flex-wrap justify-center items-center ">
                   
                   
                   
                    {
                       
                        courses?(courses.map((course,key)=>{
                            console.log(course);
                       
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