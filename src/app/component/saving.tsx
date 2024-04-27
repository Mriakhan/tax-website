import React from 'react'
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

export default function Saving() {
    return (
        <div className='relative'>
            <div className='flex  flex-col  md:flex-row justify-evenly items-center w-[full] h-[950px] md:h-[335px] bg-[#0D0F20]  '>
                <div className=' flex flex-col gap-4' data-aos="fade-up">
                    <div className='border w-16 h-16 rounded-2xl bg-[#ffc00e] ml-16'>
                        <FolderCopyIcon sx={{ color: "white", width: "60px", height: "40px", marginTop: "10px" }} />
                    </div>
                    <div>
                        <h1 className='text-[white] text-[24px] font-bold'>Saving Strategies</h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className=' flex flex-col gap-4'data-aos="fade-up">
                    <div className='border w-16 h-16 rounded-2xl bg-[#ffc00e] ml-16'>
                        <AttachMoneyOutlinedIcon sx={{ color: "white", width: "60px", height: "40px", marginTop: "10px" }} />
                    </div>
                    <div>
                        <h1 className='text-[white] text-[24px] font-bold'>Competitive Price	</h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'data-aos="fade-up">
                    <div className='border w-16 h-16 rounded-2xl bg-[#ffc00e] ml-16'>
                        < SupportAgentOutlinedIcon sx={{ color: "white", width: "60px", height: "40px", marginTop: "10px" }} />
                    </div>
                    <div>
                        <h1 className='text-[white] text-[24px] font-bold text-center'>24/7 Support</h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                    </div>
                </div>

            </div>


        </div>


    )
}
