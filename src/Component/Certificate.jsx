import React from 'react'
import Certify_Side from './page1/Certify/Certify_Side'
import IMG2 from "../Assets/image 134.png"
function Certificate() {
  return (
    <div className='grid grid-cols-1 bg-[#F7FAFF] lg:grid-cols-2 w-full place-items-center p-6 place-content-center'>
        <Certify_Side/>
        <div>
            <div className=' flex p-4 items-center justify-center bg-white shadow-md'>
                <div>
                    <img src={IMG2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate