
"use client";



export default function DonationOption() {
  return (
    <section className="bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="mb-4">
            <img
              src="/donateblood.png" //
              alt="Donate Blood"
              width={300}
              height={200}
              className="w-full object-contain" // Use object-contain for illustrations
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Donate Blood</h3>
          <p className="mb-4">Donate blood today. Help save lives.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded transition duration-300">
            Learn More
          </button>
        </div>

        <div className="text-center p-6">
          <div className="mb-4">
            <img
              src="/volunteer.png" 
              alt="Volunteer Team"
              width={300}
              height={200}
              className="w-full object-contain" // Use object-contain for illustrations
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Volunteer Team</h3>
          <p className="mb-4">We are always looking for your help.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded transition duration-300">
            Become a Volunteer
          </button>
        </div>

        <div className="text-center p-6">
          <div className="mb-4">
            <img
              src="/donatemoney.png" 
              alt="Donate Money"
              width={300}
              height={200}
              className="w-full object-contain" // Use object-contain for illustrations
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Donate Money</h3>
          <p className="mb-4">
            Your financial gift can help people who need it most.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded transition duration-300">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}