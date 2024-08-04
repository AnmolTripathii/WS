import React from 'react';
import IMG1 from '../Assets/logo_black 1.svg';
import { IoLogoWhatsapp } from 'react-icons/io';

function Navbar() {
  return (
    <div className='flex items-center w-full h-max p-8 flex-col gap-4 md:flex-row md:justify-between'>
      <div>
        <img src={IMG1} alt="Logo" />
      </div>
      <div className='flex gap-6 items-center justify-center  md:gap-2'>
        <button className='flex gap-2 items-center justify-center text-[#27AE60] text-sm md:text-lg border-2 border-[#27AE60] p-2 rounded-md'>
          <IoLogoWhatsapp color='#27AE60' size={26} />
          <span>Chat With Us</span>
        </button>
        <button className='p-2 text-white border text-sm md:text-base bg-[#2699FB] border-[#2699FB] rounded-md'>
          Call Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
