import React from 'react'
import Image from 'next/image'
import finance from "../../assets/image/finance.png"
import growth from "../../assets/image/growth.png"
import dollar from "../../assets/image/dollar.png"
import CountUp from 'react-countup';

export default function Wework()

 {
    return (
        <div className='flex  gap-32 mt-12 ml-52'>
            <div className=''data-aos="fade-right">
                <div className='flex gap-7 mt-4 mb-8'>
                    <div>
                         <Image src={finance} alt='' />
                    </div>
                   <div className='flex flex-col gap-5'>
                     <h1 className='text-[24px]'>Received Case</h1>
                    <p className='text-[#6D6D6D] w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, perferendis!</p>
                   </div>
                   
                </div>
                <div className=' w-[476px] h-2 border-black border-t'></div>
                <div className='flex gap-7 mt-6 mb-8 '>
                    <div>
                           <Image src={growth} alt='' />
                    </div>
                 <div  className='flex flex-col gap-5'>
                     <h1 className='text-[24px]'>Report Analysis </h1>
                    <p className='text-[#6D6D6D] w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, perferendis!</p>
                 </div>
                   
                </div>
                <div className=' w-[476px] h-2 border-black border-t'></div>
                <div className='flex gap-7 mt-6 mb-8'>
                    <div>
                         <Image src={dollar} alt='' />
                    </div>
                   <div className="flex flex-col gap-5">
                        <h1 className='text-[24px]'>Collect Evidence  </h1>
                    <p className='text-[#6D6D6D] w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, perferendis!</p>
                   </div>
                
                </div>
            </div>
            <div className=''>
             <div className='flex flex-col gap-3 '>
                <h1 className='text-[18px] text-[#FFC703] font-bold'>How We Work</h1>
                <p className='text-[36px] md:text-[48px] text-[#0D0F20] w-[75%] font-bold leading-tight ' data-aos="fade-down">  Bold Approaches Expert Counsel Results That Matter</p>
                <p className='w-[45%] text-[#6D6D6D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fringilla diam, et aliquet libero. Cras pulvinar elementum enim, at faucibus est.</p>
               
            </div>
            <div className='flex flex-row items-center gap-6'>
            <p className='text-[69px] text-[#0D0F20] font-bold mt-3'><CountUp delay={1} end={300} enableScrollSpy  />+</p>
            
                <p className='text-[#FFC703] text-[18px] w-[40%]'>We Have More Than 300+ Clients Around The World</p>
            </div>   
            <div className=' '>
                        <button className='bg-[#ffc00e] w-[165px] mt-2  h-[56px]  text-[#0D0F20] font-semibold'>Learn More</button></div>
            </div>
           
        </div>



    )
}
