/*** Landing Page ***/

import Link from "next/link";
import { Bodoni_Moda_SC, Press_Start_2P, Poppins, Anton } from "next/font/google";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-neutral-900 text-neutral-300">
      {/* Background Noise Texture: */}
      <div className='absolute inset-0 opacity-5 bg-[url("/noise.png")] pointer-events-none'/>

      {/* Navbar */}
      <div className="flex flex-row w-full p-4 justify-between items-center gap-5 border-b border-neutral-500 mb-24">
        <div className={`flex text-center text-base ${press_start_2p.className}`}>G.</div>
        <button className="flex p-1 px-3 items-center justify-center text-center bg-[#FF77B2] text-neutral-900 font-bold text-sm cursor-pointer">login</button>
      </div>
      
      {/* Body Container: */}
      <div className="flex flex-col w-full items-center justify-center">
        {/* Body: */}
        <div className="flex flex-col w-full justify-center items-center text-center py-5 gap-30">
          {/* Hero section: */}
          <div className="flex flex-col w-full justify-center items-center">
            <p className={`text-6xl sm:text-8xl md:text-9xl w-full py-3 font-extrabold text-neutral-100 uppercase -mb-3 ${press_start_2p.className}`}>Goal</p>
            <p className={`text-6xl sm:text-8xl md:text-9xl w-full py-3 font-extrabold text-neutral-100 uppercase ${press_start_2p.className}`}>Quest</p>
            <p className="text-sm sm:text-base md:text-xl lowercase text-center -mt-2 mb-7">Gamify your goals, level up your life</p>
            <button className="flex flex-row w-fit px-2 p-1 bg-yellow-400 text-neutral-900 justify-between gap-4 items-center cursor-pointer hover:rotate-3">
              <div className="size-3 rounded-full bg-neutral-900"/>
              <p className="font-bold">sign up</p>
              <div className="size-3 rounded-full bg-neutral-900"/>
            </button>
          </div>


          {/* How it works */}
          <div className="flex flex-col w-9/10 justify-start items-start mb-20">
            <p className="text-xl font-medium">Features.</p>
            <p className="text-sm mb-7 text-neutral-400">Here is how to level up your life</p>
            {/* Top */}
            <div className="flex flex-row bg-neutral-800 p-1 grid grid-cols-3 gap-2 w-full h-150 justify-center rounded-2xl">
              {/* Top Grid */}
              <div className={`${anton.className} flex flex-col row-span-3 col-span-3 w-full border justify-center items-start pl-5 bg-gradient-to-tl from-40% from-yellow-500 to-amber-300 rounded-2xl`}>
                <p className="text-black text-9xl font-bold">Game</p>
                <p className="text-black text-9xl font-bold">design</p>
              </div>
              <div className="flex row-span-1 col-span-1 w-full border bg-[#32EE7C]">Grid 2</div>
              <div className="flex row-span-1 col-span-2 w-full border bg-[#C734F1]">Grid 3</div>
              <div className="flex row-span-1 col-span-3 w-full border bg-[#F49F5E]">Grid 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
