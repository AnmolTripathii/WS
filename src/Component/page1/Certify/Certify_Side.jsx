import React from 'react'
import { FaCheckCircle, FaShareAlt, FaRocket } from 'react-icons/fa';
function Certify_Side() {
    return (
        <div className=" flex flex-col items-start p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Get Certified</h2>
          <p className="text-center mb-8">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full">
              <div className="mr-4 text-blue-500"><FaCheckCircle size={24} /></div>
              <div>
                <h3 className="text-xl font-semibold">Official And Verified</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full">
              <div className="mr-4 text-blue-500"><FaShareAlt size={24} /></div>
              <div>
                <h3 className="text-xl font-semibold">Easily Shareable</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full">
              <div className="mr-4 text-blue-500"><FaRocket size={24} /></div>
              <div>
                <h3 className="text-xl font-semibold">Career Shifting</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Book Free Class</button>
          </div>
        </div>
      );
}

export default Certify_Side