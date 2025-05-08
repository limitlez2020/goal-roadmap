import { JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"]
})


export default function NavBar () {

  return (
    <div className="flex flex-row w-[95%] py-4 h-15 self-center justify-between items-center gap-5 border-neutral-500 mb-28">
      <div className={`flex text-center text-base lowercase ${jetbrains_mono.className}`}>Goals.</div>
      {/* Button */}
      <button className={`${jetbrains_mono.className} flex relative cursor-pointer text-sm py-1 px-3 hover:text-green-400 hover:text-xs`}>
        <p className="flex relative lowercase">Login</p>
        <div className="absolute size-2 top-0 left-0 border-t border-l text-green-400"/>
        <div className="absolute size-2 top-0 right-0 border-t border-r text-green-400"/>
        <div className="absolute size-2 bottom-0 left-0 border-b border-l text-green-400"/>
        <div className="absolute size-2 bottom-0 right-0 border-b border-r text-green-400"/>
      </button>
    </div>
  )
}