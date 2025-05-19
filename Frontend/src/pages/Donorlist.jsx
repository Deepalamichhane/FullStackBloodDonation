import React from "react";
import Navbar from "../../component/Navigation";
import Footer from "../../component/footer";


const Donerlist = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center relative px-10 py-28">
        <div className="text-center">

          <img
            src="/error.png"
            alt="404 error"
            width={400}
            height={400}
            className="w-[400px] h-[400px]"
          />

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Donerlist;
