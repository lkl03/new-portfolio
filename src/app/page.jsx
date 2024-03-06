"use client"

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link"
import { motion } from "framer-motion";
import Typed from 'typed.js';

const Homepage = () => {
  const TypedText = () => {
    useEffect(() => {
      const options = {
        strings: ["Hi! 👋 I'm Luca", "Welcome to my portfolio!"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };

      const typed = new Typed('.typed-element', options);

      return () => {
        typed.destroy();
      };
    }, []);

    return (
      <div className="text-4xl md:text-6xl text-center font-bold">
        <span className="typed-element"></span>
      </div>
    );
  };

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 0.6 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center">
        {/*Text*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1><TypedText /></h1>
          <p className="md:text-xl text-center" style={{textWrap: 'balance'}}>View some of my projects or contact me directly with the buttons below.</p>
          <div className="w-full flex gap-4 items-center justify-center">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white transition-all ease-in-out duration-300 hover:bg-transparent hover:text-black">View My Work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black transition-all ease-in-out duration-300 hover:bg-black hover:text-white">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
