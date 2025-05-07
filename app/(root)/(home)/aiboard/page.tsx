"use client"; // ✅ Required for Client Components

import React, { useRef, useState } from "react";
import { PlayCircle } from "lucide-react";

const ShowcasePage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); //fix play video
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-900 text-white">
      
      {/* 🔹 Top Section - Shows Webpage */}
      <section className="w-full h-screen relative flex items-center justify-center">
        <iframe
          src="http://localhost:5173/"
          className="w-full h-full rounded-lg shadow-xl"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 text-gray-300 animate-bounce">
          Scroll Down ⬇️
        </div>
      </section>

      {/* 🔹 Bottom Section - Video Showcase */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full">
        <h2 className="text-5xl font-extrabold text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          ThinkBoard AI
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mt-4 leading-relaxed">
          Experience the power of AI with our <strong>next-gen AI Calculator.</strong> Perform <strong>complex calculations</strong> with precision, speed, and ease.
        </p>

        {/* Video Section */}
        <div className="relative w-full max-w-3xl mt-8 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 bg-white/5 backdrop-blur-lg p-4">
          <video
            ref={videoRef}
            className="w-full rounded-lg"
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            preload="metadata"
          >
            <source
              src="https://www.dropbox.com/scl/fi/1q4yt2483xt538nq6261e/video.mp4?rlkey=1xpfbcmgo1cm242csor81asj3&st=2aymcx4p&raw=1"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 hover:opacity-80 transition duration-300 cursor-pointer"
              onClick={handlePlay}
            >
              <PlayCircle className="text-white size-20 drop-shadow-lg hover:scale-110 transition-transform duration-200" />
            </div>
          )}
        </div>

        {/* Redirect Button */}
        <a
          href="http://localhost:5173/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 transition duration-300 shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Open AI Calculator 🚀
        </a>
      </section>
    </div>
  );
};

export default ShowcasePage;
