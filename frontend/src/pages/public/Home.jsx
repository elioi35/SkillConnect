import React from 'react'
import homepage from '../../assets/homepage.png';
import CourseCarousel from '../../components/CourseCarousel';


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[100vh] bg-gradient-to-br from-[#8B1C2B] via-[#a63c4b] to-[#c97a85] justify-center items-center px-4 py-12 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl z-0"></div>
        {/* Content */}
        <div className="flex flex-col items-start ml-29 justify-center flex-1 px-2 md:px-8 max-w-xl w-full mb-8 md:mb-0 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            SkillConnect
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-10 leading-relaxed drop-shadow">
            Ready to <span className="text-yellow-200 font-bold">reimagine</span> your career?<br />
            Get the skills and real-world experience employers want with <span className="text-yellow-100 font-semibold">Career Accelerators</span>.
          </p>
          <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#8B1C2B] px-8 py-3 rounded-full font-bold text-lg shadow-xl mb-6 transition-all duration-300 hover:scale-105 hover:from-yellow-400 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-200">
            Get Started
          </button>
        </div>
        <div className="flex justify-center items-center flex-1 w-full z-10">
          <img
            src={homepage}
            alt="SkillConnect Hero"
            className="w-full h-auto max-w-xs md:max-w-[500px] md:h-[500px] object-cover mx-auto rounded-3xl shadow-2xl border-8 border-white/30 transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* Mentors Section */}
      <section className="flex flex-col min-h-[90vh] bg-gradient-to-b from-white via-[#fbeaec] to-white justify-center items-center px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B1C2B] mb-12 text-center w-full drop-shadow">
          Meet Our Top Mentors
        </h2>
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
          {/* Mentor Card 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#8B1C2B]/20">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Mentor 1"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#8B1C2B]/20 shadow"
            />
            <h3 className="text-2xl font-bold text-[#8B1C2B] mb-1">Alex Johnson</h3>
            <p className="text-gray-700 mb-2 text-lg">Senior Software Engineer</p>
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl mr-1">★</span>
              <span className="text-gray-800 font-semibold">4.9</span>
              <span className="text-gray-500 ml-2 text-sm">(120 reviews)</span>
            </div>
          </div>
          {/* Mentor Card 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#8B1C2B]/20">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Mentor 2"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#8B1C2B]/20 shadow"
            />
            <h3 className="text-2xl font-bold text-[#8B1C2B] mb-1">Maria Lee</h3>
            <p className="text-gray-700 mb-2 text-lg">Product Manager</p>
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl mr-1">★</span>
              <span className="text-gray-800 font-semibold">4.8</span>
              <span className="text-gray-500 ml-2 text-sm">(98 reviews)</span>
            </div>
          </div>
          {/* Mentor Card 3 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#8B1C2B]/20">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Mentor 3"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#8B1C2B]/20 shadow"
            />
            <h3 className="text-2xl font-bold text-[#8B1C2B] mb-1">Samuel Green</h3>
            <p className="text-gray-700 mb-2 text-lg">UX/UI Designer</p>
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl mr-1">★</span>
              <span className="text-gray-800 font-semibold">5.0</span>
              <span className="text-gray-500 ml-2 text-sm">(150 reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="flex flex-col min-h-[40vh]  justify-center items-center px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#8B1C2B] mb-8 text-center w-full drop-shadow">
          Explore Popular Courses
        </h2>
        <div className="w-full max-w-6xl">
          <CourseCarousel />
        </div>
      </section>
    </>
  )

}

export default Home