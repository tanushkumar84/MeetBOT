"use client";

import React from "react";

const Messenger = () => {
  return (
    <section className="absolute top-16 left-[250px] right-0 bottom-0 z-30">
      <iframe
        src="https://chatappkaran.vercel.app/"
        title="Chat Application"
        className="w-full h-full"
        frameBorder="0"
        allow="clipboard-write; encrypted-media"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Messenger;
