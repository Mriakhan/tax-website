import React from 'react'
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

export default function Saving() {
    return (
        <div className='relative'>
            <div className='  w-[full] h-[335px] bg-black'>
                <div className='border w-16 h-16 rounded-2xl bg-[#ffc00e]'>
                    <FolderCopyIcon sx={{ color: "white", width: "60px", height: "40px", marginTop: "10px" }} />
                </div>

                <h1 className='text-[white]'>Saving Strategies</h1>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>

        </div>


    )
}
