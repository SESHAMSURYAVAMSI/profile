export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-200 to-green-300">
      <div className="bg-white shadow-lg rounded-2xl flex w-[900px] overflow-hidden">
        
        {/* Left Side - Signup Form */}
        <div className="w-1/2 p-10 overflow-y-auto max-h-screen">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Sign Up</h2>
          
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Confirm Email */}
            <div>
              <label className="block mb-1 font-medium">Confirm Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="Re-enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-1 font-medium">Mobile <span className="text-red-500">*</span></label>
              <input
                type="tel"
                placeholder="Enter mobile number"
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
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 font-medium">Confirm Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* reCAPTCHA placeholder */}
            <div>
              <label className="block mb-1 font-medium">reCAPTCHA</label>
              <div className="border rounded-md p-4 text-center text-red-500 text-sm">
                ERROR for site owner: Invalid site key
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm">
                I agree to all <a href="#" className="text-green-600 hover:underline">Read the T&C of TDC</a>
              </p>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-5 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-semibold hover:underline">
              Login now
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
