import React from 'react'
import { FaChalkboardTeacher, FaBook, FaRegPlayCircle, FaProjectDiagram, FaRegHandshake, FaCertificate } from 'react-icons/fa';
function Book_Classes() {
    return (
        <div className="max-w-full mx-auto p-4 bg-[#F7FAFF]">
          <div className="bg-[#F7FAFF]  p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Why Learn Digital Marketing</h2>
            <p className="text-center text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.
            </p>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 shadow rounded-lg text-center">
                <div className="w-10 h-10 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaChalkboardTeacher className="text-red-500" />
                </div>
                <h3 className="font-semibold mb-2">Learn From Industry Experts</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis.
                </p>
              </div>
    
              <div className="bg-white p-4 shadow rounded-lg text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaBook className="text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Structured & Latest Curriculum</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis.
                </p>
              </div>
    
              <div className="bg-white p-4 shadow rounded-lg text-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaRegPlayCircle className="text-yellow-500" />
                </div>
                <h3 className="font-semibold mb-2">Highly-Engaging Live Classes</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis.
                </p>
              </div>
    
              <div className="bg-white p-4 shadow rounded-lg text-center">
                <div className="w-10 h-10 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaProjectDiagram className="text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Work on Real Projects</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis.
                </p>
              </div>
    
              <div className="bg-white p-4 shadow rounded-lg text-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaRegHandshake className="text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">100% Job Assistance</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis.
                </p>
              </div>
    
              <div className="bg-white p-4 shadow rounded-lg text-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaCertificate className="text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Get Certification</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis.
                </p>
              </div>
            </div>
    
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Book Free Class</button>
            </div>
          </div>
        </div>
      );
}

export default Book_Classes