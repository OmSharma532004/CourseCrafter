import React from "react";

const FooterColumn= ({link,title})=>{
    return(
        <div>
           <a className=" text-richblack-100 hover:text-yellow-5 text-xl transition-all duration-200 mt-[20px] underline underline-offset-1">{title} : {link}</a>
        </div>
    )


}

export default FooterColumn;