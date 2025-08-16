import Image from "next/image";
export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-200 to-green-300">
      <div className="bg-white shadow-lg rounded-2xl flex w-[900px] overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Login</h2>
          
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-green-600 hover:underline">Forgot Password?</a>
              </div>
            </div>

            {/* reCAPTCHA placeholder */}
            <div>
              <label className="block mb-1 font-medium">reCAPTCHA</label>
              <div className="border rounded-md p-4 text-center text-red-500 text-sm">
                ERROR for site owner: Invalid site key
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center mt-5 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-600 font-semibold hover:underline">
              Signup now
            </a>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2">
          <img
            src="/college-building.jpg"
            alt="Building"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
