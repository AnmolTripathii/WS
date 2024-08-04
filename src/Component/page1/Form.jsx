import React from 'react';

function Form() {
  return (
    <div className="flex flex-col p-6 bg-white shadow-md rounded-lg max-w-md mx-auto my-6 w-full">
      <h2 className="text-xl font-semibold text-gray-800">
        Book Your Free Class Now!
      </h2>
      <p className="mt-1 text-gray-600">
        2 days of free demo classes without paying in advance!
      </p>
      <form className="mt-4 flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <div className="flex mt-1">
            <select className="p-2 border border-gray-300 rounded-l-md bg-gray-50">
              <option>+91</option>
              {/* Add more country codes here if needed */}
            </select>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              className="flex-1 p-2 border-t border-r border-b border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          Register Now
        </button>
      </form>
    </div>
  );
}

export default Form;
