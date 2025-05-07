"use client";

import React from "react";

const Rag = () => {
  return (
    <section className="absolute top-16 left-[250px] right-0 bottom-0 z-30">
      <iframe
        src="https://rag-pdf-p750.onrender.com"
        title="RAG PDF Project"
        className="w-full h-full"
        frameBorder="0"
        allow="clipboard-write; encrypted-media"
        loading="lazy"
      ></iframe>

      {/* Redirect Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <a
          href="https://rag-pdf-p750.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          Open in New Tab 🔗
        </a>
      </div>
    </section>
  );
};

export default Rag;
