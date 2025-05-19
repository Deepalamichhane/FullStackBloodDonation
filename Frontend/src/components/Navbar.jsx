"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const router = useNavigate();

  function createNavigation() {
    return (
      <header className="bg-white text-black py-4 px-6 shadow-xl ">
        <nav className="p-2 flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="cursor-pointer w-28 md:w-32 "
              onClick={() => router("/")}
              src="../public/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="text-3xl font-bold font-serif">
              Nepal Bloodline
              <p className="text-sm text-red-600 p-2">
                "रक्तदान गरौं, समाजका लागि उदाहरण बनौं"
              </p>
            </span>
          </div>
          <div>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/admin/donors" className="hover:underline">
                  Donor
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/Donerlist" className="hover:underline">
                  Donor List
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer inline-block"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

  return createNavigation();
};

export default Navbar;
