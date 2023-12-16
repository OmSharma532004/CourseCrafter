import React from "react";
import { FooterLink2 } from "../../../data/footer-links";
import FooterColumn from "./FooterColumn";


const Footer= ()=>{
    return(
        <div className=" pt-11 pb-[30px] flex justify-center gap-[40px]  ">
       
            {
                FooterLink2.map((element,index)=>{
                    {
                        return(
                            <div key={index} className="flex flex-col gap-5">
                                <p className=" underline underline-offset-4 text-2xl hover:text-yellow-5 text-white">{element.title}</p>

                                <div>
                                    {
                                        element.links.map((link,index)=>{
                                            return(
                                                <div className="flex flex-col gap-10">
                                                    <FooterColumn link={link.link} title={link.title}/>
                                                </div>
                                            )


                                        })
                                    }
                                </div>
                            </div>
                        )
                        
                    }
                })
            }


        </div>
        )
   
}

export default Footer;