import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center  justify-center min-h-[100vh] bg-[#8B1C2B]">
      <div className="bg-white p-10 rounded-2xl shadow-2xl min-w-[340px] max-w-[95vw] w-200 border-2 border-[#8B1C2B]">
        <h2 className="text-center mb-8 text-[#8B1C2B] text-3xl font-extrabold tracking-wide drop-shadow-lg">Welcome Back</h2>
        <form>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-lg border border-[#8B1C2B] text-base focus:outline-none focus:ring-2 focus:ring-[#8B1C2B] bg-pink-50"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block mb-2 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 rounded-lg border border-[#8B1C2B] text-base focus:outline-none focus:ring-2 focus:ring-[#8B1C2B] bg-pink-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#8B1C2B] text-white font-bold text-lg border-none cursor-pointer transition-all hover:scale-105 shadow-lg"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center text-base">
          <span>Don't have an account? </span>
          <a href="/register" className="text-[#8B1C2B] underline font-semibold hover:text-pink-600 transition-colors">Register</a>
        </div>
      </div>
    </div>
  )
}

export default Login