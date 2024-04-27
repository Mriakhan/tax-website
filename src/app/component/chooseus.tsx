import React from 'react'
import Image from 'next/image'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import girlfinance from "../../assets/image/girl financier.jpg"
import boyfinance from "../../assets/image/boy finance.jpg"
export default function Chooseus() {
  return (
    <div>
      <div className='flex flex-col mt-20 gap-3 w-[100%]'>
        <div>
          <h1 className='text-[18px] text-[#FFC703] font-bold'>Why Choose Us</h1>
          <p className='text-[36px] md:text-[48px] text-[#0D0F20] !w-[30%]  font-bold ' data-aos="fade-down">We Are Ready To Help You To Get A Solution </p>
          <p className='text-[#6D6D6D] text-[18px] w-[30%]'>Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
        </div>
        <div className='flex flex-row gap-4'>
          <CheckBoxIcon />
          <p className=' text-[#6D6D6D] text-[18px]'>Loaded with Professional and Honest Worker</p>
        </div>
        <div className='flex flex-row gap-4'>
          <CheckBoxIcon />
          <p className=' text-[#6D6D6D] text-[18px]'>Provide the Finest Construction Supplies</p>
        </div>
        <div className='flex flex-row gap-4'>
          <CheckBoxIcon />
          <p className=' text-[#6D6D6D] text-[18px]'>100% Satisfaction Construction Service</p>
        </div>
        <div className='flex flex-row gap-4'>
          <CheckBoxIcon />
          <p className=' text-[#6D6D6D] text-[18px]'>We are bonded and insured</p>
        </div>

      </div>

      <div>
        <div className='w-[341px] '>
          <Image src={girlfinance} alt='' />
        </div>
        <div className='w-[341px] '>
          <Image src={boyfinance} alt='' />
        </div>
      </div>


    </div>

  )
}
