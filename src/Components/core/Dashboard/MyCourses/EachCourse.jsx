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
        <div className=" m-5 w-[200px] ">


{
                
                course2?(

                    

                    
                  <>
            
                  <div className=" max-w-[200px] min-w-[200px] min-h-[148px] rounded-xl  text-white  bg-richblack-600 p-3">     
                    <img src={course2.courseDetails.thumbnail} alt="course" className="w-full h-[150px] object-cover rounded-xl"/>
                    <h1 className=" text-yellow-50 text-xl">{course2.courseDetails.courseName}</h1>
                    <div className="description">
                    {/* {description} */}
                    <div><b className="text-yellow-200">Price- </b>{course2.courseDetails.price} </div>
                    <br></br>
                    {/* <span className="readMore text-blue-200" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span> */}

                   <button className="text-blue-200 " onClick={()=>{
                    setView(course2) 
                    setDetails(true);
                   }}>
                    Know More
                   </button>
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