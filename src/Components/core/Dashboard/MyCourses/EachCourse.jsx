import React, { useEffect, useState } from "react";
import { fetchCourseDetails,getFullDetailsOfCourse } from "../../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";
import { Detailed } from "./Detailed";


export const EachCourse= ({course})=>{
    const [course2,setCourse2]= useState();
    const {token}= useSelector((state)=>state.auth);

    const[readmore,setreadmore]=useState(false);
    function readmoreHandler(){
        setreadmore(!readmore);
    }
    const [deleteCourse,setDeleteCourse]=useState(false);
    const [view,setView]=useState([]);
    const [details,setDetails]=useState(false);

    const [info,setInfo]=useState("");
    const getCourseDetail= async()=>{
        const result= await getFullDetailsOfCourse(course._id,token);
        setCourse2(result);

        console.log("Course Detaails aagyi",result);
        setInfo(result.courseDetails.courseDescription);
    }
    const description= readmore ? info: `${info.substring(0,50)}`;
    useEffect(()=>{
    getCourseDetail();
    
    
    },[])
    // const handleSelect=()=>{
    //     setDetails(true);
    //     // console.log("Clicked on course")

    // }
    

    return(
        <div className=" m-5">


{
                
                course2?(

                    

                    
                  <>
            
                  <div onClick={()=>{setDetails(true)
                    setView(course2)}} className=" max-w-[200px] min-w-[200px] min-h-[148px] rounded-xl  text-white  bg-richblack-600 p-3">     
                    <h1 className=" text-yellow-50 text-xl">{course2.courseDetails.courseName}</h1>
                    <div className="description">
                    {description}
                    <br></br>
                    <span className="readMore text-blue-200" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                    </div>

                    
                  
                      
                    
                    </div>
                 
                   



                   
               
                    
                    </>
                ):(
                    <div>

                    </div>
                )
            }
               
            {
                details?(<>
                    <Detailed course={course} setDetails={setDetails}/>
     </>):(<>
                    
                    </>)
            }
          
            
       
    



        </div>
    )
}