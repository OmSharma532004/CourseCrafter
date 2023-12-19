import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import { useState } from "react";
import Home from './pages/Home';
import Navbar from "./Components/core/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import enterOtp from "./Components/core/Auth/enterOtp";
import ForgotPassword from "./pages/ForgotPassword";
import EnterOtp from "./pages/enterotp";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./Components/core/Dashboard/MyProfile";
import PrivateRoute from "./Components/core/Auth/PrivateRoute";
import Settings from "./Components/core/Dashboard/Settings";
import EnrolledCourses from "./Components/core/Dashboard/EnrolledCourses";
import { useDispatch,useSelector } from "react-redux";
import Cart from "./Components/core/Dashboard/Cart";
import AddCourse from "./Components/core/Dashboard/AddCourse";
import { MyCourses } from "./Components/core/Dashboard/MyCourses";
import { AvailableCourses } from "./Components/core/Dashboard/AvailableCourses";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)

  return (
  
    
    <div className="w-[100vw] min-h-[100vh]  bg-richblack-900 flex flex-col font-inter ">
 
      <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>   
    <Route path="/enterOtp" element={<EnterOtp/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route
          path="update-password/:id"
          element={

              <UpdatePassword />
     
          }
        />  
         <Route
          path="verify-email"
          element={
      
              <VerifyEmail />

          }
        /> 
        
   
    <Route path="/about"
      element={<About/>}

    />
     <Route path="/contact"
      element={<Contact/>}

    />
   
   <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      <Route path="dashboard/Settings" element={<Settings />} />

      {
        user?.accountType==="Student"&&
        <>
              <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>} />
              <Route path="dashboard/cart" element={<Cart/>} />
              <Route path="dashboard/all-Courses" element={<AvailableCourses/>}/>
        </>
      }
       {
        user?.accountType==="Instructor"&&
        <>
              <Route path="dashboard/add-course" element={<AddCourse/>}></Route>
              <Route path="dashboard/my-courses" element={<MyCourses/>}></Route>
        </>
      }

    </Route>
      



  </Routes>
    </div>
  );
}

export default App;
