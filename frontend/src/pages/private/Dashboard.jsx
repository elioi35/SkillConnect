import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    mentor: "",
    mentorPhoto: "",
    category: "",
  });

  

  return (
    <div className="min-h-screen bg-[#f4f6f8] p-4 sm:p-6">
      {/* Header */}
      <div className="relative bg-[#8B1C2B] text-white rounded-2xl p-4 sm:p-6 shadow-lg mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">Indigo Violet</h2>
            <div className="flex items-center justify-center sm:justify-start text-sm">
              <span className="text-yellow-400 mr-1">★</span>
              4.6 (18 Ratings)
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-white p-4 sm:p-6 rounded-2xl shadow-md mb-6 lg:mb-0">
          <nav className="space-y-4">
            <button className="flex items-center gap-3 font-medium text-[#8B1C2B]">
              <span className="w-5 h-5">🏠</span> Dashboard
            </button>
          </nav>
        </aside>

        {/* Dashboard Cards */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 flex-grow">
          {[
            {
              label: "Active Courses",
              value: 20
            },
            {
              label: "Enrolled Courses",
              value: 84
            },
            {
              label: "Completed Courses",
              value: 42
            },
            {
              label: "Total Students",
              value: 145
            },
            {
              label: "Total Courses",
              value: 65
            },
            {
              label: "Total Earnings",
              value: 26
            }
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow text-center border border-[#8B1C2B]/20"
            >
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-[#8B1C2B]">{card.value}</div>
              <div className="text-gray-700">{card.label}</div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;