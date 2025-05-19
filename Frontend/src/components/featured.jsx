import React from "react";

const Featured = () => {
  return (
    <div className="relative w-full h-screen">
      <video 
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
        aria-label="Blood donation promotional video"
      >
        <source src="/videos/blood-donation.mp4" type="video/mp4" />
        <p>
          Your browser doesn{"'"}t support HTML5 video. Here is a
          <a 
            href="/public/video.mp4"
            aria-label="Download blood donation video"
          >
            link to the video
          </a> instead.
        </p>
      </video>

      <div 
        className="absolute inset-0 bg-black/50"
        role="presentation"
      >
        <div className="container mx-auto h-full flex items-center px-4">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Give Blood, Save Lives
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your donation can make a difference in someone{"'"}s life today.
            </p>
            <button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              aria-label="Navigate to donation form"
              onClick={() => window.location.href = "/donate"}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

