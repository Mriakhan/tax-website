import React from 'react'
import Image from 'next/image'
import finance from "../../assets/image/finance.png"
import growth from "../../assets/image/growth.png"
import dollar from "../../assets/image/dollar.png"

export default function Wework() {
    return (
        <div className='flex'>
            <div>
                <div>
                    <Image src={finance} alt='' />
                    <h1 className='text-[24px]'>Received Case</h1>
                    <p className='text-[#6D6D6D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, perferendis!</p>
                </div>
                <div className=' w-[476px] h-2 border-black border-t'></div>
                <div>
                    <Image src={growth} alt='' />
                    <h1 className='text-[24px]'>Report Analysis </h1>
                    <p className='text-[#6D6D6D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, perferendis!</p>
                </div>
                <div className=' w-[476px] h-2 border-black border-t'></div>
                <div>
                    <Image src={dollar} alt='' />
                    <h1 className='text-[24px]'>Collect Evidence  </h1>
                    <p className='text-[#6D6D6D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, perferendis!</p>
                </div>
            </div>
            <div>
                <h1 className='text-[18px] text-[#FFC703] font-bold'>How We Work</h1>
                <p className='text-[36px] md:text-[48px] text-[#0D0F20] w-[40%] font-bold leading-tight '>  Bold Approaches Expert Counsel Results That Matter</p>
                <p className='w-[35%] text-[#6D6D6D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fringilla diam, et aliquet libero. Cras pulvinar elementum enim, at faucibus est.</p>
            </div>
        </div>



    )
}
