import { Anton, JetBrains_Mono } from 'next/font/google'
import { signup } from './actions'
import Link from 'next/link'

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"]
})


export default function LoginPage() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen items-center justify-center bg-neutral-900 text-neutral-300">
      {/* Background Noise Texture: */}
      <div className='absolute inset-0 opacity-5 bg-[url("/noise.png")] pointer-events-none'/>

      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-1 mb-7">
        <h1 className={`${anton.className} text-4xl font-bold uppercase`}>Hello There</h1>
        <p className="text-sm mb-5">let&apos;s create to your account</p>
      </div>

      {/* Form Container: */}
      <form className="flex flex-col items-start justify-start w-1/2">
        <div className='flex flex-col w-full justify-between gap-1 mb-5'>
          <label htmlFor="email" className="text-sm">Name:</label>
          <input className="w-full py-1 px-2 bg-neutral-700/40 border border-neutral-400 border-dashed rounded-xs" id="name" name="name" type="name" required />
        </div>

        <div className='flex flex-col w-full justify-between gap-1 mb-5'>
          <label htmlFor="email" className="text-sm">Email:</label>
          <input className="w-full py-1 px-2 bg-neutral-700/40 border border-neutral-400 border-dashed rounded-xs" id="email" name="email" type="email" required />
        </div>

        <div className="flex flex-col w-full justify-between gap-1 mb-5">
          <label htmlFor="password" className="text-sm">Password:</label>
          <input className="w-full py-1 px-2 border bg-neutral-700/40 border-neutral-400 border-dashed rounded-sm" id="password" name="password" type="password" required />
        </div>

        <button className="w-full bg-green-400 text-neutral-900 font-bold p-1 rounded-sm mt-5 mb-2"
                formAction={signup}>
          Sign up
        </button>

        <div className="flex flex-row w-full gap-2 text-sm items-center justify-center">
          <p className="">Already have an account?</p>
          <Link href={"/login"} className="text-green-300">Log in</Link>
        </div>
      </form>
    </div>
  )
}