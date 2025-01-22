import React, { useEffect, useState } from "react";
import { getFullDetailsOfCourse } from "../../../../services/operations/courseDetailsAPI";
import { useDispatch, useSelector } from "react-redux";
import { Detailed } from "../MyCourses/Detailed";
import {addToCart,removeFromCart} from "../../../../reducer/slices/cartSlice"
import toast from "react-hot-toast";


export const Course= ({course})=>{
    const [course2,setCourse2]= useState();
    const {token}= useSelector((state)=>state.auth);
    const {cart}=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
    const add = () => {
        console.log(course2)
        dispatch(addToCart(course2.courseDetails));
        toast.success("Item added to Cart");
      }
    
      const remove = () => {
        console.log(course)
        dispatch(removeFromCart(course2.courseDetails._id));
        toast.error("Item removed from Cart");
      }
    const[readmore,setreadmore]=useState(false);
    function readmoreHandler(){
        setreadmore(!readmore);
    }
    const [deleteCourse,setDeleteCourse]=useState(false);
    const [AddToCart,setAddToCart]=useState(false);
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
            
                  <div  className=" w-[200px]  rounded-xl  text-white  bg-richblack-600 p-3">     
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

                    
                  
                    {
          cart.some((p) => p.id == course2.courseDetails._id) ?
          (<button
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
          onClick={()=>{
            remove();
           

          }}>
            Remove Item
          </button>) :
          (<button
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
          onClick={()=>{
            add();
          

          }}>
            Add to Cart
          </button>)
        } 
                    
                    </div>
                    {/* <button onClick={()=>{
                        setAddToCart(!AddToCart);
                        const options=course2;
                      
                        
                    
                    }} className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
                        {
                            AddToCart?(
                                <>
                                Remove From Cart
                                </>
                            ):(
                                <>
                                Add To Cart
                                </>
                            )
                        }
                    </button> */}
                 
                   



                   
               
                    
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