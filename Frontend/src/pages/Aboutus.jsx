import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      {/* WHO WE ARE Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 px-8">
            <div className="text-gray-600">
              <h2 className="text-3xl font-bold mb-4">WHO WE ARE</h2>
              <h3 className="text-2xl font-bold mb-4">Ways to help</h3>
              <div className="border-b-2 border-red-500 w-20 mb-6"></div>
              <p className="text-lg mb-8 text-gray-500">
                This web is totally based on blood donation system. It will help
                the community in providing blood. With the help of this web
                People can easily find Blood according to their requirements. It
                will help the community in saving and serving people.
              </p>
              <p className="text-lg mb-8 text-gray-500">
                If we talk about our city Lahore, according to survey we need 30
                blood bottles per hour. So this web will help in finding blood.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="/public/image1.png"
              alt="image"
              height={300}
              width={400}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 text-xl text-gray-500">
        <div className="container mx-auto px-8">
          <div className="space-y-6">
            <div className="mb-4">
              <h4 className="font-bold">
                Why do I have to wait 3 months before donating again?
              </h4>
              <p>
                Since blood contains iron (which is essential for making new red
                blood cells), donating blood more often than every 3 months
                causes the body to lose iron faster than it can be made up from
                iron-containing foods in our diet. As a result, the donor could
                develop iron deficiency anemia, causing him/her to feel weak and
                tired.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold">Will I get AIDS if I donate blood?</h4>
              <p>
                Absolutely not! All equipment used to collect blood are sterile.
                These items are used once and discarded.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold">Who cannot donate blood?</h4>
              <p>
                Cardiac problems, hypertension, epilepsy, diabetes (on insulin
                therapy), history of cancer, chronic kidney or liver disease,
                bleeding tendencies, venereal disease. Major surgery in the last
                6 months or minor surgery in the past 3 months. Jaundice or
                hepatitis or positivity for Hepatitis B or C viruses.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold">How long can blood be stored?</h4>
              <p>
                Red cells - 35 days
                <br />
                Platelets - 5 days
                <br />
                Fresh frozen plasma - 1 year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <img
              src="/woman.png"
              alt="Woman Blood Donation"
              width={400}
              height={400}
              className="w-full max-w-md"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4">Join Us</h2>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
              />
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
                Sign In
              </button>
            </form>
            <p className="mt-4">
              If you don't have account{" "}
              <a href="#" className="text-red-500 hover:text-red-700">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="mt-8">
                <h3 className="font-bold text-xl mb-4">Key Statistics</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                    Over 10,000 registered donors
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                    Present in 15+ districts
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                    24/7 emergency support
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/donation-center.jpg"
                alt="Blood donation center with medical staff and equipment"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Aboutus;
