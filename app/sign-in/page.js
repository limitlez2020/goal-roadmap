/*** SIGN IN/UP Page ***/

import Link from "next/link";

export default function SignIn() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center bg-[#D1CDCC] text-neutral-100">
      
      {/* Body Container: */}
      <div className="flex flex-col w-full items-center">
        {/* Body: */}
        <div className="flex flex-col w-1/2 justify-center items-center py-5">
          <p className="text-2xl font-extrabold">Getting Started</p>
          <div className="flex flex-row text-sm text-neutral-400 mb-15 gap-2 lowercase">
            <p>Already have an account?</p>
            <Link href={"?"} className="underline text-red-300">Sign in</Link>
          </div>

          {/* Sign up form */}
          <form className="flex flex-col w-full gap-5">
            {/* First name */}
            <div className="flex flex-col w-full border border-neutral-400 p-2 rounded-sm">
              <p className="text-neutral-400 text-sm">First Name</p>
              <input type="text"/>
            </div>

            {/* Last name */}
            <div className="flex flex-col w-full border border-neutral-400 p-2">
              <p className="text-neutral-400 text-sm">Last Name</p>
              <input type="text"/>
            </div>

            {/* Email */}
            <div className="flex flex-col w-full border border-neutral-400 p-2">
              <p className="text-neutral-400 text-sm">Email</p>
              <input type="email"/>
            </div>

            {/* Pasword */}
            <div className="flex flex-col w-full border border-neutral-400 p-2">
              <p className="text-neutral-400 text-sm">Password</p>
              <div className="flex flex-row justify-between gap-5">
                <input type="password"/>
                <p className="text-sm text-neutral-400">Forgot Password?</p>
              </div>
            </div>

            {/* Terms and Condition */}
            <div className="flex flex-row w-full justify-center items-center gap-2">
              <input type="checkbox" className="size-4 bg-white text-black has-checked:bg-black checked:text-white"/>
              <p className="text-xs font-medium">You agree to our Terms and Condtions</p>
            </div>

            {/* Sign up button */}
            <Link href={"/home"} className="w-7/10 p-2 bg-[#E4F289] text-black text-center self-center rounded-sm mt-7 lowercase">
              Sign Up
            </Link>
          </form>

        </div>
      </div>
    </div>
  );
}
