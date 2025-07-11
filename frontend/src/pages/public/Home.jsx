import React from 'react'
import homepage from '../../assets/homepage.png';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#8B1C2B] justify-center items-center px-4 py-8">
      <div className="flex flex-col ml-7 items-center justify-center flex-1 px-2 md:px-8 max-w-xl w-full mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 text-center">SkillConnect</h1>
        <button className="bg-white text-[#8B1C2B] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-base md:text-lg shadow-lg mb-6 md:mb-8 hover:bg-gray-100 transition self-center">
          Get Started
        </button>
      </div>
      <div className="flex justify-center items-center flex-1 w-full">
        <img
          src={homepage}
          alt="photo"
          className="w-full h-auto max-w-xs md:max-w-[500px] md:h-[500px] object-cover mx-auto rounded-3xl shadow-xl transition-all duration-700 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  )
}
export default Home