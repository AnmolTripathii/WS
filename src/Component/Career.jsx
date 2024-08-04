import React from 'react'
import { FaPenNib, FaSearch, FaUsers, FaChartLine } from 'react-icons/fa';
function Career() {
    return (
        <div className=" w-full flex flex-col justify-center items-center my-10 p-4">
          <h2 className="text-3xl font-bold text-center mb-4">Top career options in Digital Marketing</h2>
          <p className="text-center mb-8">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
          <div className="flex flex-wrap  justify-center gap-6 w-full">
            <div className="flex flex-col items-start p-8 gap-4 bg-white shadow-md rounded-lg w-full sm:w-1/2 xl:w-1/5 lg:w-1/4">
              <div className="mr-4 p-3 shadow-md text-blue-500"><FaPenNib size={24} /></div>
              <div className='flex flex-col'>
                <h3 className="text-xl font-semibold">Content Marketer</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
              </div>
            </div>
            <div className="flex flex-col items-start p-8 gap-4 bg-white shadow-md rounded-lg w-full sm:w-1/2 lg:w-1/5">
              <div className="mr-4 p-3 shadow-md text-blue-500"><FaSearch size={24} /></div>
              <div className='flex flex-col'>
                <h3 className="text-xl font-semibold">SEO Specialist</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
              </div>
            </div>
            <div className="flex flex-col items-start p-8 gap-4 bg-white shadow-md rounded-lg w-full sm:w-1/2 xl:w-1/5 lg:w-1/4">
              <div className="mr-4 p-3 shadow-md text-blue-500"><FaUsers size={24} /></div>
              <div className='flex flex-col'>
                <h3 className="text-xl font-semibold">Social Media Manager</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
              </div>
            </div>
            <div className="flex flex-col items-start p-8 gap-4 bg-white shadow-md rounded-lg w-full sm:w-1/2 xl:w-1/5 lg:w-1/4">
              <div className="mr-4 p-3 shadow-md text-blue-500"><FaChartLine size={24} /></div>
              <div className='flex flex-col'>
                <h3 className="text-xl font-semibold">Marketing Analyst</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Career