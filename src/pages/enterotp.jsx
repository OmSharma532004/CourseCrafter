import React, { useState } from "react";
import { signUp } from "../services/operations/authApi";
import { useDispatch } from "react-redux";

const EnterOtp = (signupData,navigate) => {
    const dispatch = useDispatch();
    
    const [Otp, setOtp] = useState("");

    function submitHandler(e) {
        const newData = {
            ...signupData,
            Otp,
        }
        dispatch(signUp(newData, navigate));
    }

    return (
        <div>
            <div className=" text-white">Enter the OTP sent to your email address</div>
            <form onChange={(e) => { setOtp(e.target.value) }} onSubmit={submitHandler}>
                <input type="text" name="otp"></input>
            </form>
        </div>
    )
}

export default EnterOtp;
