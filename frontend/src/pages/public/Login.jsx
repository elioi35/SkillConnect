import React, {useState} from 'react'
import axios from "axios";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center  justify-center min-h-[100vh] bg-[#8B1C2B]">
      <div className="bg-white p-10 rounded-2xl shadow-2xl min-w-[340px] max-w-[95vw] w-200 border-2 border-[#8B1C2B]">
        <h2 className="text-center mb-8 text-[#8B1C2B] text-3xl font-extrabold tracking-wide drop-shadow-lg">Welcome Back</h2>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-lg border border-[#8B1C2B] text-base focus:outline-none focus:ring-2 focus:ring-[#8B1C2B] bg-pink-50"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <label className="block mb-2 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 rounded-lg border border-[#8B1C2B] text-base focus:outline-none focus:ring-2 focus:ring-[#8B1C2B] bg-pink-50"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit" onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-[#8B1C2B] text-white font-bold text-lg border-none cursor-pointer transition-all hover:scale-105 shadow-lg"
          >
            Log In
          </button>
        <div className="mt-6 text-center text-base">
          <span>Don't have an account? </span>
          <a href="/register" className="text-[#8B1C2B] underline font-semibold hover:text-pink-600 transition-colors">Register</a>
        </div>
      </div>
    </div>
  )
}

export default Login