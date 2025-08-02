import React, { useEffect, useState } from "react";
import axios from "axios";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get("http://localhost:3000/courses");
      const grouped = {};
      res.data.forEach(course => {
        if (!grouped[course.mentor]) {
          grouped[course.mentor] = {
            name: course.mentor,
            photo: course.mentorPhoto,
            courses: [],
          };
        }
        grouped[course.mentor].courses.push({
          title: course.title,
          description: course.description,
        });
      });
      setMentors(Object.values(grouped));
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f6f8] to-[#fceeee] p-10">
      <h1 className="text-4xl font-bold text-center text-[#8B1C2B] mb-12 tracking-wide">
        All Mentors & Their Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {mentors.map((mentor, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-xl border border-[#8B1C2B]/20 transition transform hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <div className="flex items-center mb-6">
              <img
                src={mentor.photo}
                alt={mentor.name}
                className="w-16 h-16 rounded-full mr-4 border-2 border-[#8B1C2B] shadow-sm"
              />
              <div>
                <h2 className="text-xl font-semibold text-[#8B1C2B] hover:underline">
                  {mentor.name}
                </h2>
                <p className="text-sm text-gray-500">Mentor</p>
              </div>
            </div>
            <div className="space-y-4">
              {mentor.courses.map((course, cidx) => (
                <div
                  key={cidx}
                  className="bg-[#fdf3f3] p-4 rounded-xl border border-[#8B1C2B]/10 hover:bg-[#fce5e5] transition duration-200 cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold text-[#8B1C2B] group-hover:underline">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;