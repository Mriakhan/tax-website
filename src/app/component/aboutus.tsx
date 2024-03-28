import React from 'react'
import Image from "next/image";
import about from "../../assets/image/about worker.jpg"

export default function Aboutus() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center mt-20 gap-3 w-[100%]'>
                <h1 className='text-[18px] text-[#FFC703] font-bold'>About Us</h1>
                <p className='text-[36px] md:text-[48px] text-[#0D0F20] w-[90%] md:w-[50%] font-bold text-center'>We have 20+ Years of experience in Accounting & Tax Service</p>
            </div>
            <div className='mt-14 w-[100%] md:w-[50%] '>
                <Image src={about} alt='' />
            </div>

        </div>

    )
}
