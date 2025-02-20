import React, { useEffect,useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";
import { useSelector} from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown2 from "../Auth/NavbarProfile";
import { apiConnector } from "../../../services/apiconnecter";
import { categories } from "../../../services/apis";
import {IoIosArrowDropdownCircle} from "react-icons/io"


const Navbar = ()=>{
   const {token}=useSelector((state)=>state.auth);
   const {user}= useSelector((state)=>state.profile);
   const {totalItems}=useSelector((state)=>state.cart);

    const location=useLocation();
    const  [subLinks,setSubLinks]= useState([]);
    const fetchSublinks=  async() => {
        try{
            const result =await apiConnector("GET", categories.CATEGORIES_API);
            console.log("Printing Sublinks result :" , result.data.data);
            setSubLinks(result.data.data);

        }
        catch(err){
            console.log("Cannot fetch category list",err)

        }
    }
    useEffect(()=>{
        fetchSublinks();
       
    },[])

    const matchRoute= (route)=>{
        return matchPath({path:route},location.pathname);

    }
    return(
        <div className=" flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
            <div className="w-11/12 flex max-w-maxContent items-center justify-between ">
                <Link to="/">
                    <h1 className=" text-white text-2xl">EDFLOW</h1>


                </Link>
                {/* Nav links */}
                <nav>
                    <ul className="flex gap-x-6 text-richblack-25"> 
                    {
                        NavbarLinks.map((link,index)=>(
                            <li key={index}>
                             {
                                link.title==="Catalog"?(<div className=" group relative hover:text-yellow-200 flex items-center gap-2">

                                    <p>{link.title}</p>
                                    <IoIosArrowDropdownCircle/>

                                    <div className=" opacity-0  absolute left-[50%] top-[50%] z-50 flex w-[200px] 
                                    translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4
                                     text-richblack-900  transition-all duration-150 
                                      hover:translate-y-[1.65em] hover:opacity-100 lg:w-[300px]">


                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {subLinks.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                                    </div>
                                </div>) : (
                                    <Link to={link?.path}>
                                        <p className={`${matchRoute(link?.path)?"text-yellow-25":"text-richblack-25"}`}>
                                            {link.title}
                                        </p>

                                    </Link>
                                )
                             }

                            </li>)
                        )
                    }

                    </ul>
                </nav>

                {/* Login/signup/dashboard */}
                <div className=" flex gap-x-4 items-center" >
                    {
                        user &&user?.accountType!="Instructor" && (
                        <Link to="/dashboard/cart" className="relative">

                            <AiOutlineShoppingCart/>
                            {
                                totalItems>0 && 
                                <span>
                                    {totalItems}
                                </span>
                            }
                        </Link>)
                        
                        }

                        {
                            token===null&&(
                            <Link to="/login">
                                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[12px] text-richblack-25  rounded-xl">Log in</button>
                            </Link>)
                        }
                         {
                            token===null&&(
                            <Link to="/signup">
                                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[12px] text-richblack-25  rounded-xl ">Sign up</button>
                            </Link>)
                        }
                        {
                            token !==null &&(
                                <ProfileDropdown2/>
                            )

                        }
                    </div>
                

                
                 
            </div>
        </div>
    )

}

export default  Navbar;
