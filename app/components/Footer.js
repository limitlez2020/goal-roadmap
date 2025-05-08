import { Anton, JetBrains_Mono } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"]
})

export default function Footer () {
  return (
    <div className={`flex flex-row mt-28 bg-[#2EFF9B] w-[95%] h-10 mb-3 rounded-sm text-neutral-900 items-center justify-center`}
         style={{ clipPath: 'polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)' }}
    >
      <p className="lowercase text-xs font-medium">
       copyright @ 2025
      </p>
    </div>
  )
}