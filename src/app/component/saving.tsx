import React from 'react'
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

export default function Saving() {
    return (
        <div className='relative'>
            <div className='flex justify-evenly  w-[full] h-[335px] bg-[#0D0F20]  '>
                <div className='text-center mt-20 flex flex-col gap-7  '>
                    <div className='border w-16 h-16 rounded-2xl bg-[#ffc00e] ml-16'>
                        <FolderCopyIcon sx={{ color: "white", width: "60px", height: "40px", marginTop: "10px" }} />
                    </div>
                    <div>
                        <h1 className='text-[white] text-[24px] font-bold'>Saving Strategies</h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='text-center mt-20 flex flex-col gap-7   '>
                    <div className='border w-16 h-16 rounded-2xl bg-[#ffc00e]  ml-16'>
                        <FolderCopyIcon sx={{ color: "white", width: "60px", height: "40px", marginTop: "10px" }} />
                    </div>
                    <div>
                        <h1 className='text-[white] text-[24px] font-bold'>Competitive Price</h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                    </div>


                </div>
                <div className=' text-center mt-20 flex flex-col gap-7  '>
                    <div className='border w-16 h-16 rounded-2xl bg-[#ffc00e]  ml-16'>
                        <FolderCopyIcon sx={{ color: "white", width: "60px", height: "40px", marginTop: "10px" }} />
                    </div>
                    <div>
                        <h1 className='text-[white] text-[24px] font-bold'>24/7 Support</h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>

                    </div>

                </div>
            </div>


        </div>


    )
}
