import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import IconBtn from "../../../core/common/IconBtn"
import { buyCourse, buyFreeCourse } from "../../../../services/operations/studentFeaturesApi"
import { setTotalZero } from "../../../../reducer/slices/cartSlice"
import { set } from "react-hook-form"

export default function RenderTotalAmount() {
  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [coupon, setCoupon] = useState("")
  const handleBuyCourse = () => {

    if(total>0){
      const courses = cart.map((course) => course._id)
    buyCourse(token, courses, user, navigate, dispatch)
    }
    const courses = cart.map((course) => course._id)
    buyFreeCourse(token, courses, user, navigate, dispatch)
  }
  const ApplyCoupon=()=>{
    if(coupon==="OmSharma"){
      dispatch(setTotalZero());
    }
    
  }

  return (
    <div className="min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
      <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {total}</p>
      <IconBtn
        text="Buy Now"
        onclick={handleBuyCourse}
        customClasses="w-full justify-center"
      />
      {/* coupon code */}
      <div className="flex items-center justify-between mt-6">
       
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Coupon Code"
          className="w-2/3 py-1 px-2 rounded-md bg-richblack-700 text-richblack-300 font-semibold"
        />
        
        <button onClick={ApplyCoupon}  className="w-1/3 py-1 px-2 rounded-md bg-yellow-100 text-richblack-800 font-semibold">
          Apply
        </button>
      </div>
    </div>
  )
}