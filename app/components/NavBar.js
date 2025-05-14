"use client"

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"]
})


export default function NavBar () {
  const [user, setUser] = useState(null);
  const supabase = createClient();


  useEffect(() => {
    /* Listener for change in the Auth state -- provides the session */
    const {data: { subscription }} = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    })

    /* As soon as the NavBar component mounts, immediately check for
     * and sets the current session state. If the user is already
     * logged in, the user state will be set to the user object. */
    const getInitialSession = async () => {
      const {data: {session}} = await supabase.auth.getSession();
      setUser(session?.user || null);
    }
    getInitialSession();

    /* Cleanup subscription listener on unmount */
    return () => {
      subscription?.unsubscribe();
    }

  }, [supabase])



  return (
    <div className="flex flex-row w-[95%] py-4 h-15 self-center justify-between items-center gap-5 border-neutral-500 mb-28">
      <Link href={"/"} className={`flex text-center text-base lowercase ${jetbrains_mono.className}`}>Goals.</Link>
      
      {/* Button */}
      {user ? (
        <Link href={"/dashboard"} className={`${jetbrains_mono.className} flex relative cursor-pointer text-sm py-1 px-3 hover:text-green-400 hover:text-xs transition-all ease-in-out duration-200`}>
          <p className="flex relative lowercase">Dashboard</p>
          <div className="absolute size-2 top-0 left-0 border-t border-l text-green-400"/>
          <div className="absolute size-2 top-0 right-0 border-t border-r text-green-400"/>
          <div className="absolute size-2 bottom-0 left-0 border-b border-l text-green-400"/>
          <div className="absolute size-2 bottom-0 right-0 border-b border-r text-green-400"/>
        </Link>
      ) : (
        <Link href={"/login"} className={`${jetbrains_mono.className} flex relative cursor-pointer text-sm py-1 px-3 hover:text-green-400 hover:text-xs transition-all ease-in-out duration-200`}>
          <p className="flex relative lowercase">Login</p>
          <div className="absolute size-2 top-0 left-0 border-t border-l text-green-400"/>
          <div className="absolute size-2 top-0 right-0 border-t border-r text-green-400"/>
          <div className="absolute size-2 bottom-0 left-0 border-b border-l text-green-400"/>
          <div className="absolute size-2 bottom-0 right-0 border-b border-r text-green-400"/>
        </Link>
      )}
    </div>
  )
}