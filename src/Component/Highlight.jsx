import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { PiStar } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
function Highlight() {
    return (
        <div className="container  p-8 flex items-start justify-center max-w-full flex-col bg-[#F7FAFF] ">
            <h2 className="text-2xl font-bold text-center mb-4">Key Highlights of the Course</h2>
            <p className="text-center mb-8">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center  w-full">
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full ">
                    <div className="mr-4 p-3 rounded-md bg-[#E9F8FF] text-[#429CE4]"><IoDocumentTextOutline size={60} /></div>
                    <div className='felx flex-col items-start justify-center flex-wrap'>
                        <h3 className="text-xl font-semibold">Industry-recognized Certification</h3>
                        <h4 className="text-gray-500">Stand out to your professional</h4>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full ">
                    <div className="mr-4 p-3 bg-[#FFF4EF] rounded-md text-[#FA9552]"><PiStar size={60} /></div>
                    <div>
                        <h3 className="text-xl font-semibold">Assignments & Modules tests</h3>
                        <h4 className="text-gray-500">Test your knowledge</h4>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full ">
                    <div className="mr-4 bg-[#FBF0FD]  p-3 rounded-md text-[#CF53DB]"><IoVideocamOutline size={60} /></div>
                    <div>
                        <h3 className="text-xl font-semibold">Live Classes & Recorded Lectures</h3>
                        <h4 className="text-gray-500">Best of both worlds of learning</h4>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full ">
                    <div className="mr-4 p-3 bg-[#F0FCF6] rounded-md text-[#61DD9C]"><LuDownload size={60} /></div>
                    <div>
                        <h3 className="text-xl font-semibold">Downloadable Content</h3>
                        <h4 className="text-gray-500">With lifetime access</h4>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full ">
                    <div className="mr-4 p-3 bg-[#F1F1FC] rounded-md text-[#4540E1]"><TiDocumentText size={60} /></div>
                    <div>
                        <h3 className="text-xl font-semibold">6 Industry Level Projects</h3>
                        <h4 className="text-gray-500">Get practical skills</h4>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg w-full ">
                    <div className="mr-4 p-3 bg-[#FDEFEF] rounded-md text-[#EF6767]"><AiOutlineMessage size={60} /></div>
                    <div>
                        <h3 className="text-xl font-semibold">4 Live Doubt Clearing Session</h3>
                        <h4 className="text-gray-500">Gain a clear understanding</h4>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full text-center mt-8">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Book Free Class</button>
            </div>
        </div>
    );

}

export default Highlight