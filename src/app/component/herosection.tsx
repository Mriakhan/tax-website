import React from 'react'
import Image from "next/image";
import capsole from "../../assets/image/capsoles1.jpg"


export default function Herosection() {
    return (
        // <div>
        <div className="relative w-[100%] " >
            <Image className=''
                src={capsole}
                style={{
                    width: "100%",
                    height: "80vh",
                    objectFit: "cover",
                    position: "absolute",
                }} alt="" />
            <div className="absolute inset-0 bg-[#0D0F20] flex justify-center  opacity-70 h-[80vh]"></div>
            <div className="relative w-[90%] md:w-[60%] h-[80vh] flex flex-col justify-center">
                <div className=' ml-12 md:ml-56 '>
                    <h1 className='text-[40px] xl:text-[64px] text-[white] font-extrabold !w-[100%] md:w-[80%] leading-tight' data-aos="fade-down">Forward-Thinking  Accounting & Tax Services</h1>
                    <p className='text-[14px] xl:text-[16px] text-[white]  mt-3'>Morbi tristique senectus et netus et malesuada fames ac. Nunc vel risus <br />
                        commodo viverra. Non pulvinar neque laoreet suspendisse interdum. </p>
                    <div className=' '>
                        <button className='bg-[#ffc00e] w-56 md:w-36 h-16 mt-11  '>Get started</button>

                    </div>
                </div>



            </div>
        </div>






        // </div>
    )
}
