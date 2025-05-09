/*** Landing Page ***/

import Link from "next/link";
import { Bodoni_Moda_SC, Press_Start_2P, Poppins, Anton, JetBrains_Mono } from "next/font/google";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const bodoni_moda_sc = Bodoni_Moda_SC({
  subsets: ["latin"]
})
const press_start_2p = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"]
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-neutral-900 text-neutral-300">
      {/* Background Noise Texture: */}
      <div className='absolute inset-0 opacity-5 bg-[url("/noise.png")] pointer-events-none'/>

      {/* Navbar */}
      <NavBar/>

      
      {/* Body Container: */}
      <div className="flex flex-col w-8/10 items-center text-[#e6e5de] gap-32">
       
        {/* Hero: */}
        <div className="flex flex-col w-full items-center">
          {/* News */}
          <div className={`${jetbrains_mono.className} flex flex-row gap-2 py-2 px-3 items-center bg-orange-200 mb-6 rounded-sm text-neutral-900 opacity-80 cursor-default`}>
            <GrAnnounce className="size-4 stroke-1"/>
            <p className="uppercase font-bold text-xs">The full app is coming soon</p>
            <GrAnnounce className="size-4 stroke-1 rotate-y-180"/>
          </div>

          {/* Header */}
          <div className={`${anton.className} flex flex-col items-center text-center text-6xl sm:text-7xl uppercase mb-4`}>
            <p> Gamify Your Goals</p>
            <p> Level Up Your Life </p>
          </div>

          {/* Subheading */}
          <div className={`flex flex-col items-center text-center text-base md:text-lg mb-8`}>
            <p>Turn goal-setting from a chore into the</p>
            <p>most engaging and rewarding game.</p>
          </div>

          {/* CTA: */}
          <div className="relative w-44">
            <button className={`${jetbrains_mono.className} relative z-10 flex flex-row items-center justify-center gap-1 w-full py-3 text-base font-bold bg-green-400 text-neutral-900 rounded-sm hover:gap-0 transition-all ease-in-out duration-200 cursor-pointer`}>
              <IoMdArrowDropright className="size-5"/>
              <p>Get Started</p>
              <IoMdArrowDropleft className="size-5"/>
            </button>
            {/* Shadow */}
            <div className="absolute w-full z-0 bg-green-900 top-1 left-1 right-0 bottom-0 h-12 rounded-sm"/>
          </div>
        </div>



        {/* Benefits: */}
        <div className={`flex flex-col xl:flex-row w-full bg-[#E7E6DF]/20 items-center justify-center rounded-md py-10 px-5 gap-x-28 gap-y-15`}>
          {/* Left Side */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row xl:flex-col gap-x-2">
              <p className="text-3xl">Cool</p>
              <p className="text-3xl">Benefits</p>
            </div>
            {/* button */}
            <button className="flex flex-row justify-center items-center gap-1 hover:gap-0 hover:text-green-400 cursor-pointer">
              <IoMdArrowDropright className="size-3"/>
              get started
              <IoMdArrowDropleft className="size-3"/>
            </button>
          </div>

          {/* Right side: */}
          <div className="flex flex-row flex-wrap gap-x-20 gap-y-10 justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className={`${anton.className} text-7xl`}>100%</p>
              <p className={`${jetbrains_mono.className} uppercase font-bold text-sm`}>clear roadmap</p>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <p className={`${anton.className} text-7xl`}>+50%</p>
              <p className={`${jetbrains_mono.className} uppercase font-bold text-sm`}>increased motivation</p>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <p className={`${anton.className} text-7xl`}>Daily</p>
              <p className={`${jetbrains_mono.className} uppercase font-bold text-sm`}>Progress Tracking</p>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <p className={`${anton.className} text-7xl`}>10x</p>
              <p className={`${jetbrains_mono.className} uppercase font-bold text-sm`}>more achievements</p>
            </div>
          </div>
        </div>


        {/* Features: */}
        <div className="flex flex-col w-full justify-center items-center mt-12">
          <p className={`${anton.className} text-5xl uppercase`}>Our Features</p>
          <p>check out our amazing features</p>

          <div className="flex flex-row flex-wrap relative justify-center w-full mt-10 py-10 px-5 gap-6">
            {/* 1. */}
            <div className="flex flex-row bg-[#E7E6DF]/10 py-3 px-5 rounded-md gap-4 w-140">
              <div className="flex size-6 justify-center items-center border border-neutral-900 bg-neutral-800 rounded-sm mt-1">
                <FaArrowRight className="size-3 text-green-400"/>
              </div>
              <div className="flex flex-col">
                <p className={`${jetbrains_mono.className} uppercase text-lg font-bold`}>Guided Goal Setting</p>
                <p className="text-base">Define your objectives with clarity and set realistic timelines</p>
              </div>
            </div>

            {/* 2. */}
            <div className="flex flex-row bg-[#E7E6DF]/10 py-3 px-5 rounded-md gap-4 w-140">
              <div className="flex size-6 justify-center items-center border border-neutral-900 bg-neutral-800 rounded-sm mt-1">
                <FaArrowRight className="size-3 text-green-400"/>
              </div>
              <div className="flex flex-col">
                <p className={`${jetbrains_mono.className} uppercase text-lg font-bold`}>Automated Roadmap Generation</p>
                <p className="text-base">Instantly break down large goals into actionable, step-by-step plans</p>
              </div>
            </div>

            {/* 3. */}
            <div className="flex flex-row bg-[#E7E6DF]/10 py-3 px-5 rounded-md gap-4 w-140">
              <div className="flex size-6 justify-center items-center border border-neutral-900 bg-neutral-800 rounded-sm mt-1">
                <FaArrowRight className="size-3 text-green-400"/>
              </div>
              <div className="flex flex-col">
                <p className={`${jetbrains_mono.className} uppercase text-lg font-bold`}>Real-time Progress Tracking</p>
                <p className="text-base">Monitor your completion status for every task and goal</p>
              </div>
            </div>

            {/* 4. */}
            <div className="flex flex-row bg-[#E7E6DF]/10 py-3 px-5 rounded-md gap-4 w-140">
              <div className="flex size-6 justify-center items-center border border-neutral-900 bg-neutral-800 rounded-sm mt-1">
                <FaArrowRight className="size-3 text-green-400"/>
              </div>
              <div className="flex flex-col">
                <p className={`${jetbrains_mono.className} uppercase text-lg font-bold`}>Engaging Gamififation System</p>
                <p className="text-base">Earn points, unlock badges, and build streaks as you achieve</p>
              </div>
            </div>

            {/* 5. */}
            <div className="flex flex-row bg-[#E7E6DF]/10 py-3 px-5 rounded-md gap-4 w-140">
              <div className="flex size-6 justify-center items-center border border-neutral-900 bg-neutral-800 rounded-sm mt-1">
                <FaArrowRight className="size-3 text-green-400"/>
              </div>
              <div className="flex flex-col">
                <p className={`${jetbrains_mono.className} uppercase text-lg font-bold`}>Visual Progress Dashboard</p>
                <p className="text-base">See how far you&apos;ve come with intuitive charts and indicators</p>
              </div>
            </div>

            {/* 6. */}
            <div className="flex flex-row bg-[#E7E6DF]/10 py-3 px-5 rounded-md gap-4 w-140">
              <div className="flex size-6 justify-center items-center border border-neutral-900 bg-neutral-800 rounded-sm mt-1">
                <FaArrowRight className="size-3 text-green-400"/>
              </div>
              <div className="flex flex-col">
                <p className={`${jetbrains_mono.className} uppercase text-lg font-bold`}>Flexible Task Management</p>
                <p className="text-base">Easily add, edit, or reschedule steps as your plan evolves</p>
              </div>
            </div>



            {/* Border */}
            <div className="absolute size-3 top-0 left-0 border-green-400 border-b border-r"/>
            <div className="absolute size-3 top-0 right-0 border-green-400 border-b border-l"/>
            <div className="absolute size-3 bottom-0 left-0 border-green-400 border-t border-r"/>
            <div className="absolute size-3 bottom-0 right-0 border-green-400 border-t border-l"/>
          </div>
        </div>
      </div>


      {/* Footer: */}
      <Footer/>
    </div>
  );
}
