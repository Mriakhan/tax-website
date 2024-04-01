import React from 'react'
import Image from 'next/image'
import finance from "../../assets/image/finance.png"

export default function Wework() {
    return (
        <div>
            <Image src={finance} alt='' />
            <h1 className='text-[24px]'>Received Case</h1>
        </div>
    )
}
