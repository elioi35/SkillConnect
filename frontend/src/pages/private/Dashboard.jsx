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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/courses", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Course created!");
      setShowForm(false);
      setForm({
        title: "",
        description: "",
        mentor: "",
        mentorPhoto: "",
        category: "",
      });
    } catch (err) {
      alert("Error creating course");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] p-6">
      {/* Header */}
      <div className="relative bg-[#8B1C2B] text-white rounded-2xl p-6 shadow-lg mb-10">
        <div className="flex items-center space-x-6">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <div>
            <h2 className="text-2xl font-bold">Indigo Violet</h2>
            <div className="flex items-center text-sm">
              <span className="text-yellow-400 mr-1">★</span>
              4.6 (18 Ratings)
            </div>
          </div>
        </div>
        <button
          className="absolute hover:cursor-pointer top-6 right-6 bg-white text-black px-4 py-2 rounded-lg font-medium shadow-md"
          onClick={() => setShowForm(true)}
        >
          + Create a New Course
        </button>
      </div>

      {/* Modal for Course Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
          >
            <h3 className="text-xl hover:cursor-pointer  font-bold mb-4 text-[#8B1C2B]">Add New Course</h3>
            <input
              name="title"
              type="text"
              placeholder="Course Title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              
            />
            <input
              name="mentor"
              type="text"
              placeholder="Mentor Name"
              value={form.mentor}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input
              name="mentorPhoto"
              type="text"
              placeholder="Mentor Photo URL"
              value={form.mentorPhoto}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input
              name="category"
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="Course Description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="bg-[#8B1C2B] hover:cursor-pointer text-white px-4 py-2 rounded font-bold"
              >
                Create
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:cursor-pointer px-4 py-2 rounded"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Sidebar and Dashboard */}
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 rounded-2xl h-20 shadow-md">
          <nav className="space-y-4">
            <button className="flex items-center gap-3 font-medium text-[#8B1C2B]">
              <span className="w-5 h-5">🏠</span> Dashboard
            </button>
          </nav>
        </aside>

        {/* Dashboard Cards */}
        <main className="grid grid-cols-3 gap-6 flex-grow">
          {[
            { label: "Active Courses", value: 20 },
            { label: "Enrolled Courses", value: 84 },
            { label: "Completed Courses", value: 42 },
            { label: "Total Students", value: 145 },
            { label: "Total Courses", value: 65 },
            { label: "Total Earnings", value: 26 }
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow text-center border border-[#8B1C2B]/20"
            >
              <div className="text-3xl font-bold mb-2 text-[#8B1C2B]">{card.value}</div>
              <div className="text-gray-700">{card.label}</div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;