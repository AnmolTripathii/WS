import React from 'react'
import { SiTicktick } from "react-icons/si";
function Curriculum() {
    return (
        <div className="max-w-full mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Curriculum of Our Digital Marketing</h2>
            <p className="text-center text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur Imperdiet tellus ut ornare pharetra.</p>
    
            <div className="flex justify-center mb-4">
              <div className="space-x-4 flex justify-evenly mb-4 w-full bg-white shadow-md flex-wrap">
                <button className="px-4 transition-all ease-in duration-200 py-2 text-gray-700 border-b-2 border-white hover:border-blue-500 hover:text-black hover:bg-gray-200">Introduction</button>
                <button className="px-4 transition-all ease-in duration-200 py-2 text-gray-700 border-b-2 border-white hover:border-blue-500 hover:text-black hover:bg-gray-200">Case Studies</button>
                <button className="px-4 transition-all ease-in duration-200 py-2 text-gray-700 border-b-2 border-white hover:border-blue-500 hover:text-black hover:bg-gray-200">Google AdSense</button>
                <button className="px-4 transition-all ease-in duration-200 py-2 text-gray-700 border-b-2 border-white hover:border-blue-500 hover:text-black hover:bg-gray-200">SEO Mastery</button>
                <button className="px-4 transition-all ease-in duration-200 py-2 text-gray-700 border-b-2 border-white hover:border-blue-500 hover:text-black hover:bg-gray-200">Google Analytics</button>
              </div>
            </div>
    
            <div className="bg-white shadow-md p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex flex-col gap-6'>
                  <div className="flex items-center mb-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"><SiTicktick/></span>
                    <span className="ml-2 w-10/12">What is Digital Marketing?</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className=" w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"><SiTicktick/></span>
                    <span className="ml-2 w-10/12">Requirement of Digital Marketing</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className=" w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"><SiTicktick/></span>
                    <span className="ml-2 w-10/12">Digital Marketing for Working Professionals</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className=" w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"><SiTicktick/></span>
                    <span className="ml-2 w-10/12">Job opportunities in Digital Marketing</span>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className="flex items-center mb-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"><SiTicktick/></span>
                    <span className="ml-2 w-10/12">Scope of Digital Marketing</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className=" w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"><SiTicktick/></span>
                    <span className="ml-2 w-10/12">Latest Trends in Digital Marketing</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className=" w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"><SiTicktick/></span>
                    <span className="ml-2 w-10/12">Digital Marketing for Small, Medium, and Large Businesses</span>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Download Curriculum</button>
            </div>
          </div>
        </div>
      );
}

export default Curriculum