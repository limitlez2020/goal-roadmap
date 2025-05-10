/****** Coming soon page *******/
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Anton } from "next/font/google"


const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})

export default function ComingSoon () {


  return (
    <div className="relative w-full border min-h-screen flex flex-col items-center justify-between bg-neutral-900 text-neutral-300">
      {/* Background Noise Texture: */}
      <div className='absolute inset-0 opacity-5 bg-[url("/noise.png")] pointer-events-none'/>

      {/* Navbar */}
      <NavBar/>
      
      {/* Body Container: */}
      <div className="flex flex-col w-9/10 sm:w-8/10 h-full justify-center items-center text-[#e6e5de]">
        <p className={`${anton.className} text-center text-neutral-200 text-8xl`}>COMING SOON</p>
        <p>this page is currently under construction 🚧</p>
      </div>

      {/* Footer: */}
      <Footer/>
    </div>
  )
}