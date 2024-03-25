import React from 'react'
import Image from "next/image";
import fineco from '../../assets/image/Logo.png';
import DropdownMenu from './dropdown';


export default function Header() {
    return (
        <div className='flex justify-center items-center gap-32 bg-white h-24 '>
            <div>
                <Image src={fineco} alt='' />
            </div>
            <div className='flex gap-10'>
                <DropdownMenu tittle={"home page"} />
                <DropdownMenu tittle={"our services"} />
                <DropdownMenu tittle={"Case Studies"} />
                <DropdownMenu tittle={"Pages"} />
            </div>
            <div>
                <button className='bg-[#ffc00e] w-36 h-16'>Contact Us</button>
            </div>
        </div>
    )
}

