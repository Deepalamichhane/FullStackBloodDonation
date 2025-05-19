
import { Droplet, MapPin, Search } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [city, setCity] = useState("kathmandu");

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto flex items-center">
        <div className="w-1/2 px-8">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Why Should I Donate Blood ?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Blood is needed to save lives in times of emergencies and to sustain
            the lives of those with medical conditions, like leukemia,
            thalassemia and bleeding disorders, as well as patients who are
            undergoing major surgeries. For many patients, blood donors are
            their lifeline.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Read more
          </button>
        </div>
        <div className="w-1/2 flex justify-center iterms-center">
          <img
            src="/image.png"
            alt="image"
            width={400}
            height={400}
            className="w-full max-w-md"
          />
        </div>
      </section>

      {/* Blood Group and City Section */}
      <section className="container py-12 min-h-full content-center bg-gray-100 flex m-20">
        <div className="md:flex-col md:w-1/2 py-9 px-10">
          <img src="/image1.png" alt="image" width={400} height={400} />
        </div>

        <div className="md-w-1/2 flex justify-end items-center">
          <div className="bg-gray-200 rounded-3xl p-8 w-96">
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Blood Group</h3>
                <div className="flex items-center border rounded p-2">
                  <Droplet size={24} color="red" className="mr-2" />
                  <select
                    id="bloodGroup"
                    className="w-full p-2 border rounded"
                    required
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">City</h3>
                <div className="flex items-center border rounded p-2">
                  <MapPin size={24} className="mr-2" />
                  <select
                    id="city"
                    className="w-full p-2 border rounded"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="kathmandu">Kathmandu</option>
                    <option value="bhaktapur">Bhaktapur</option>
                    <option value="patan">Patan</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex items-center justify-center">
                Search
                <Search size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-8">
            {/* Left content */}
            <div className="w-1/2">
              <h2 className="text-md text-gray-600">Get Involved</h2>
              <h2 className="text-2xl font-bold font-serif">Ways to help</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="red"
                className="w-11 h-11 my-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
              <p className="text-md text-gray-600 mb-8">
                This web is totally based on blood donation system. It will help
                the community in providing blood. With the help of this web,
                people can easily find blood according to their requirement. It
                will help the community in saving and serving people. If we talk
                about our city Kathmandu, according to survey we need 30 blood
                bottles per hour, so this web will help in finding blood.
              </p>
            </div>

            {/* Right image */}
            <div className="w-1/2 flex justify-center items-center">
              <img
                src="/public/Src.png"
                alt="image"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;