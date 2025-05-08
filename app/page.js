/*** Landing Page ***/

import Link from "next/link";
import { Bodoni_Moda_SC, Press_Start_2P, Poppins, Anton, JetBrains_Mono } from "next/font/google";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
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
      <div className="flex flex-col w-9/10 items-center text-[#e6e5de]">
        {/* Hero: */}
        <div className="flex flex-col w-full items-center">
          {/* News */}
          <div className={`${jetbrains_mono.className} flex flex-row gap-2 py-2 px-3 items-center bg-orange-200 mb-6 rounded-sm text-neutral-900 opacity-80 cursor-default`}>
            <GrAnnounce className="size-4 stroke-1"/>
            <p className="uppercase font-bold text-xs">The full app is coming soon</p>
            <GrAnnounce className="size-4 stroke-1 rotate-y-180"/>
          </div>

          {/* Header */}
          <div className={`${anton.className} flex flex-col items-center text-center text-7xl uppercase mb-4`}>
            <p> Gamify Your Goals</p>
            <p> Level Up Your Life </p>
          </div>

          {/* Subheading */}
          <div className={`flex flex-col w-1/2 items-center text-center text-lg mb-8`}>
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
      </div>


      {/* Footer: */}
      <Footer/>
    </div>
  );
}
