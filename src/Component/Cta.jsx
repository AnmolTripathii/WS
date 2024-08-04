import React from 'react'
import { FaUser } from 'react-icons/fa';
function Cta() {
    return (
        <div className="max-w-full mx-auto p-4 bg-gray-50">
          <div className="bg-white shadow-md rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-bold text-center mb-4">What Our Students Are Saying!</h2>
            <p className="text-center text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-12 shadow rounded-lg">
                <div className="flex items-center mb-4">
                  <FaUser className="text-gray-500 w-10 h-10 rounded-full" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Matt Cannon</h3>
                    <p className="text-gray-500">September 1, 2023</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi. Sit eu nisl non scelerisque vestibulum pulvinar. Condimentum massa bibendum pretium tincidunt sed vel.
                </p>
              </div>
    
              <div className="bg-white p-12 shadow rounded-lg">
                <div className="flex items-center mb-4">
                  <FaUser className="text-gray-500 w-10 h-10 rounded-full" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Matt Cannon</h3>
                    <p className="text-gray-500">September 1, 2023</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi. Sit eu nisl non scelerisque vestibulum pulvinar. Condimentum massa bibendum pretium tincidunt sed vel.
                </p>
              </div>
            </div>
          </div>
    
          <div className="bg-blue-500 text-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Are You Ready To Start Your Course?</h2>
            <p className="text-center mb-6">
              Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi.
            </p>
            <div className="flex justify-center p-8 items-center">
              <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold">Book Free Class</button>
            </div>
          </div>
        </div>
      );
}

export default Cta