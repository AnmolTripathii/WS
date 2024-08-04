import React from 'react'
import IMG3 from '../Assets/image 144.png'
import IMG4 from '../Assets/logo_black 2.png'
function Footer() {
    return (
        <div className="w-full mx-auto">
         
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-white">Top Companies Hiring Digital Marketing in India</h2>
            <div className="flex space-x-8 mt-8">
              <img src={IMG3} alt="" />
            </div>
          </div>
    
          
          <div className="bg-gray-800 py-8 flex flex-col flex-wrap">
            <div className="text-center text-white">
              <div className="text-2xl font-bold w-full flex items-center justify-center"><img src={IMG4} alt="" /></div>
              <p className="mt-4 text-wrap">Lorem ipsum dolor sit amet consectetur. Mattis id rhoncus non fermentum quam duis faucibus blandit. Non suscipit quis sed et mus nisl lacinia massa</p>
              <p className="mt-4">&copy; All rights reserved by WsCube Tech</p>
            </div>
          </div>
        </div>
      );
}

export default Footer