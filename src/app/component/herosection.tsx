import React from 'react'
import Image from "next/image";
import capsole from "../../assets/image/capsoles1.jpg"


export default function Herosection() {
    return (
        <div className="relative">
            <Image
                src={capsole}
                style={{
                    width: "100%",
                    height: "80vh",
                    objectFit: "cover",
                    position: "absolute",
                }} alt="" />
            <div className="absolute inset-0 bg-black flex justify-center  opacity-40 h-[80vh]"></div>
            <div className="relative px-96 py-36  ">
                <div>
                    <h1 className='text-[64px] text-[white] font-bold '>Forward-Thinking <br /> Accounting & Tax <br /> Services</h1>
                    <p className='text-[16px] text-[white]'>Morbi tristique senectus et netus et malesuada fames ac. Nunc vel risus <br />  commodo viverra. Non pulvinar neque laoreet suspendisse interdum. </p>
                    <div className='swing '>
                        <button className='bg-[#ffc00e] w-36 h-16 mt-11 '>Get started</button>

                    </div>

                </div>

            </div>



        </div>
    )
}
