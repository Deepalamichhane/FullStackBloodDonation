"use client";



export default function Joinus() {
  return (
    <section className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-4 w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Side (Form) */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-5xl font-semibold mb-14">Join us</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
          <div className="mt-4 text-sm">
            <span>If you don't have account! </span>
            <a href="#" className="font-medium text-red-500 hover:text-red-700">
              Sign up
            </a>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 p-4 flex items-center justify-center ">
          <div className="relative w-full h-full">
            <img
              src="/woman.png"
              alt="Join Us Illustration"
              width={400}
              height={400}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
