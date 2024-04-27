import React from 'react'
import Image from 'next/image'
import image1 from "../../assets/image/image 1.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image2 from "../../assets/image/image$2.png"
import image3 from "../../assets/image/image 3.png"
export default function Ourservices() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-20 gap-3 w-[100%]'>
                <h1 className='text-[18px] text-[#FFC703] font-bold'>Our Services</h1>
                <p className='text-[36px] md:text-[48px] text-[#0D0F20] w-[90%] md:w-[50%] font-bold text-center' data-aos="fade-down">We Serve The Best Service</p>
            </div>
            <div className='flex flex-wrap justify-center items-center mt-16 gap-8 w-[90%] ml-4 lg:ml-20'>
                <div className='w-[341px] h-[455px] border-2  hover:border-[#000] flex flex-col text-center justify-center gap-6 ' data-aos="fade-right">
                    <div className='flex justify-center'>
                        <Image src={image1} alt='' />
                    </div>
                    <p className='text-[32px] font-extrabold w-[80%] ml-6'>Book Keeping Service</p>
                    <p className='text-[16px] '>Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p className='text-[16px] text-[#FFC703] font-bold hover:text-[#000] '>Explore <ArrowForwardIosIcon sx={{ width: "18px" }} /> </p>
                </div>

                <div className='w-[341px] h-[455px] bg-black border-2 border-black hover:border-[grey] flex flex-col text-center justify-center gap-6 '>
                    <div className='flex justify-center'>
                        <Image src={image2} alt='' />
                    </div>
                    <p className='text-[32px] text-[white] font-extrabold w-[80%] ml-6'>Money Payroll Service </p>
                    <p className='text-[16px] text-[white]'>Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p className='text-[16px] text-[#FFC703] font-bold hover:text-[white] '>Explore <ArrowForwardIosIcon sx={{ width: "18px" }} /> </p>
                </div>

                <div className='w-[341px] h-[455px] border-2 hover:border-[#000] flex flex-col text-center justify-center gap-6 ' data-aos="fade-left">
                    <div className='flex justify-center'>
                        <Image src={image3} alt='' />
                    </div>
                    <p className='text-[32px] font-extrabold w-[80%] ml-6'>Audit & Assurance</p>
                    <p className='text-[16px] '>Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p className='text-[16px] text-[#FFC703] font-bold hover:text-[#000] '>Explore <ArrowForwardIosIcon sx={{ width: "18px" }} /> </p>
                </div>

            </div>
            <div className='flex justify-center '>
                <button className='bg-[#ffc00e] w-56 md:w-36 h-16 mt-11 font-bold '>More Service</button>
            </div>


        </div>
    )
}
