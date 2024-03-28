import React from 'react'
import Image from 'next/image'
import taximage from "../../assets/image/taximage1.jpg"
import tax2 from "../../assets/image/taximage2.jpg"
import tax3 from "../../assets/image/taximage3.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Casestudy() {
    return (
        <div>
            <div className='flex justify-center w-[100%] items-center mt-36'>
                <div className='flex flex-col  '>
                    <h1 className='text-[18px] text-[#FFC703] font-bold'>Case Study</h1>
                    <p className='text-[36px] md:text-[48px] text-[#0D0F20] w-[90%] md:w-[50%] font-bold '>See Our Project We Have Done</p>
                    <p className='text-[16px] text-[#6D6D6D] w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <button className='bg-[#ffc00e] w-56 md:w-36 h-16 mt-11 font-bold '>View All Cases</button>
                </div>
            </div>
            <div className=' mt-16 grid grid-cols-3'>
                <div className=''>
                    <div className=''>
                        <Image src={taximage} className='' style={{ width: "", height: "350px", position: "absolute", objectFit: "cover" }} alt='' />
                    </div>

                    <div className='relative'>
                        <h1 className='text-[32px] text-[white] font-extrabold'>Tax Management</h1>
                        <p className='text-[16px] text-[#FFC703] font-bold hover:text-[white] '>view detail<ArrowForwardIosIcon sx={{ width: "18px" }} /> </p>
                    </div>
                </div>
                <div className=''>
                    <div className=''>
                        <Image src={tax2} className='' style={{ width: "", height: "350px", position: "absolute", objectFit: "cover" }} alt='' />
                    </div>

                    <div className='relative'>
                        <h1 className='text-[32px] text-[white] font-extrabold'>Tax Management</h1>
                        <p className='text-[16px] text-[#FFC703] font-bold hover:text-[white] '>view detail<ArrowForwardIosIcon sx={{ width: "18px" }} /> </p>
                    </div>
                </div>
                <div className=''>
                    <div className=''>
                        <Image src={tax3} className='' style={{ width: "634px", height: "350px", position: "absolute", objectFit: "cover" }} alt='' />
                    </div>

                    <div className='relative'>
                        <h1 className='text-[32px] text-[white] font-extrabold'>Tax Management</h1>
                        <p className='text-[16px] text-[#FFC703] font-bold hover:text-[white] '>view detail<ArrowForwardIosIcon sx={{ width: "18px" }} /> </p>
                    </div>
                </div>


            </div>

        </div>



    )
}
