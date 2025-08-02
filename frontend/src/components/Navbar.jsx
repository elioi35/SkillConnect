import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    mentor: "",
    mentorPhoto: "",
    category: "",
  });
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchRole = async () => {
      if (localStorage.getItem("token")) {
        try {
          const res = await axios.get("http://localhost:3000/protected/me", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          setRole(res.data.role);
        } catch (err) {
          setRole("");
        }
      }
    };
    fetchRole();
  }, []);

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
    <nav className="bg-[#8B1C2B] h-22 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto rounded-lg mt-1.5 shadow border-2 border-white bg-white p-1 transition-transform duration-200 hover:scale-105"
            />
            <span className="text-white font-bold text-2xl tracking-wide drop-shadow">
              SkillConnect
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            >
              Home
            </Link>
            <Link
              to="/mentors"
              className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            >
              Mentors
            </Link>
            {localStorage.getItem("token") ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
                >
                  Dashboard
                </Link>
                <Link
                  to="/logout"
                  className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </Link>
                {role === "Admin" && (
                  <button
                    className="bg-white text-[#8B1C2B] px-4 py-2 rounded-lg font-medium shadow-md hover:bg-gray-200 hover:cursor-pointer"
                    onClick={() => setShowForm(true)}
                  >
                    + Create a New Course
                  </button>
                )}
                {showForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
                    >
                      <h3 className="text-xl hover:cursor-pointer font-bold mb-4 text-[#8B1C2B]">Add New Course</h3>
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
              </>
            ) : null}
            {!localStorage.getItem("token") ? (
              <>
                <Link
                  to="/login"
                  className="text-black font-medium px-3 py-2 rounded bg-white transition duration-150"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-black font-medium px-3 py-2 rounded bg-white transition duration-150"
                >
                  Register
                </Link>
              </>
            ) : null}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#8B1C2B] rounded-b-xl shadow animate-fade-in-down">
          <Link
            to="/"
            className="block text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="block text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/mentors"
            className="block text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Mentors
          </Link>
          <Link
            to="/login"
            className="block text-black font-medium px-3 py-2 rounded bg-white transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block text-black font-medium px-3 py-2 rounded bg-white transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;