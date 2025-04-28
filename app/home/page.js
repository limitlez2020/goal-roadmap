/*** SIGN IN/UP Page ***/

import Link from "next/link";
import { Bodoni_Moda_SC } from "next/font/google";

const bodoni_moda_sc = Bodoni_Moda_SC({
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col relative justify-center items-center bg-neutral-900 text-neutral-100">
      {/* Background Noise Texture: */}
      <div className='absolute inset-0 opacity-8 bg-[url("/noise.png")] pointer-events-none'/>

      {/* Navbar */}
      <div>
        
      </div>
      
      {/* Body Container: */}
      <div className="flex flex-col w-full items-center">
        {/* Body: */}
        <div className="flex flex-col w-1/2 justify-center items-center py-5">
          <p className={`text-9xl font-extrabold uppercase ${bodoni_moda_sc.className}`}>Goal Quest</p>
          <p className="text-xl lowercase">Goal Quest</p>
        </div>
      </div>
    </div>
  );
}
