import React from 'react'
import Image from "next/image";
import fineco from '../../assets/image/Logo.png';
import DropdownMenu from './dropdown';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';


export default function Header() {
    return (
        <div className='flex justify-evenly items-center gap-4 sm:gap-24 bg-white h-24 xl:!w-[90%] !w-[100%]'>
            <div className='w-[221px]'>
                <Image src={fineco}
                    style={{ width: "100%", objectFit: "cover" }} alt='' />
            </div>
            <div className='lg:!flex !hidden gap-6 xl:gap-14'>
                <DropdownMenu tittle={"home page"} />
                <DropdownMenu tittle={"our services"} />
                <DropdownMenu tittle={"Case Studies"} />
                <DropdownMenu tittle={"Pages"} />
            </div>
            <div>
                <button className='bg-[#ffc00e] w-36 h-16 items-center justify-center !hidden lg:!flex '>Contact Us</button>
            </div>
            <button className='bg-[black] w-10 h-10 !flex lg:!hidden'>
                < DensityMediumOutlinedIcon sx={{ color: "#ffc00e", marginLeft: "9px", marginTop: "8px" }} />
            </button>
        </div>
    )
}

