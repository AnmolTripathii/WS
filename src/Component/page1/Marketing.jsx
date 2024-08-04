import React from 'react'
import { TiTick } from "react-icons/ti";
import { BsDownload } from "react-icons/bs";
function Marketing() {
  return (
    <div className="flex flex-col p-6 md:p-0 bg-white  rounded-lg max-w-xl mx-auto my-6">
      <h2 className=" text-xl md:text-2xl font-bold text-gray-800">
        Career Opportunities in{' '}
        <span className="text-blue-600">Digital Marketing</span>
      </h2>
      <p className="mt-2 text-gray-600">
        Digital marketing course so you only pay-after-placement
      </p>
      <ul className="mt-4 space-y-2 text-gray-700">
        <li className="flex items-center">
          <span className="text-blue-500"><TiTick /></span>
          <span className="ml-2">Specialization: Performance Marketing</span>
        </li>
        <li className="flex items-center">
          <span className="text-blue-500"><TiTick /></span>
          <span className="ml-2">Min salary of Rs 4.5 LPA</span>
        </li>
        <li className="flex items-center">
          <span className="text-blue-500"><TiTick /></span>
          <span className="ml-2">50 seats only</span>
        </li>
      </ul>
      <div className="mt-6 flex flex-col md:flex-col lg:flex-row gap-4">
        <button className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex-1">
          Book 2 Days Demo
        </button>
        <button className="p-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 flex items-center justify-evenly"><BsDownload />
          Download Curriculum
        </button>
      </div>
    </div>
  )
}

export default Marketing