"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
        // Adjust this value to control when the effect starts
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pb-20 px-4">
      <div className="flex flex-col items-center justify-center gap-5 text-center mt-20">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-r from-yellow-600 to-amber-900 bg-clip-text text-transparent font-bold">
          Finanacial Management
          <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-900 mb-4 max-w-2xl mx-auto">
          An AI powered Financial Management platform that helps you to manage
          your everyday finances with ease.
          <br /> Track, analyze and optimize your spending with real-time
          insights and personalized recommendations.
        </p>
        <div>
          <Link
            href="/dashboard"
            className="bg-black text-white px-6 py-3 rounded-md text-lg
                 hover:bg-blue-800 transition duration-300"
          >
            Get Started
          </Link>
        </div>
        <div div className="hero-image-wrapper">
        <div ref={imageRef} className="hero-image">
          <Image
            src="/banner.jpg"
            alt="hero"
            width={1280}
            height={720}
            className="rounded-lg shadow-2xl border mx-auto"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
