"use client"

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";

import emailjs from '@emailjs/browser'

const ContactPage = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const text= "Contact Me!"

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 0.6}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-2 items-center justify-center">
        <div className="h-1/4 lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div>
            {text.split("").map((letter, index)=>(
              <motion.span key={index} initial={{opacity:1}} animate={{opacity: 0}} transition={{duration: 3, repeat: Infinity, delay: index * 0.1}}>{letter}</motion.span>
            ))}
          </motion.div>
        </div>
        <div className="pb-48">
            <Link href="/CV-Luca-Lago.pdf" download="CV-Luca-Lago" target="_blank" rel="noopener noreferrer">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white transition-all ease-in-out duration-300 hover:bg-transparent hover:text-black">Download My Resume</button>
            </Link>
        </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span>Hi Luca,</span>
          <textarea rows="4" className="bg-transparent border-b-2 border-b-black outline-none resize-none" name="user_message"/>
          <span>My email address is:</span>
          <input type="email" className="bg-transparent border-b-2 border-b-black outline-none" name="user_email" />
          <span>Best Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
          {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
          {error && <span className="text-red-600 font-semibold">Something went wrong! Please try again.</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage