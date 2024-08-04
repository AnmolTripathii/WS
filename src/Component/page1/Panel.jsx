import React from 'react'

function Panel() {
    return (
        <div className="flex  sm:flex-row bg-white shadow-md rounded-lg p-4 w-full md:w-4/5  mx-auto my-6">
          <div className="flex-1 text-center  md:p-2">
            <h2 className="text-blue-600 text-sm md:text-xl font-bold">1000+</h2>
            <p className="text-gray-600 text-sm" >Students Trained</p>
          </div>
          <div className="flex-1 text-center  md:p-2">
            <h2 className="text-blue-600 text-sm md:text-xl font-bold">₹4.5 LPA</h2>
            <p className="text-gray-600 text-sm" >Average Salary</p>
          </div>
          <div className="flex-1 text-center  md:p-2">
            <h2 className="text-blue-600 text-sm md:text-xl font-bold">320+</h2>
            <p className="text-gray-600 text-sm" >Recruiting Partners</p>
          </div>
          <div className="flex-1 text-center  md:p-2">
            <h2 className="text-blue-600 text-sm md:text-xl font-bold">10:00 am</h2>
            <p className="text-gray-600 text-sm" >Program Timings</p>
          </div>
          <div className="flex-1 text-center  md:p-2">
            <h2 className="text-blue-600 text-sm md:text-xl font-bold">11th May</h2>
            <p className="text-gray-600 text-sm" >Next Batch Starts</p>
          </div>
        </div>
      );
}

export default Panel