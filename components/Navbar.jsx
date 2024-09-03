"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-green-600 text-white p-3 flex gap-14 justify-between">
      <div className="flex gap-14">
        {session?.user?.email === "admin@gmail.com" ? (
          <>
            <Link className="text-white font-bold" href={"/postsoildata"}>Post Soil Data</Link>
            <Link className="text-white font-bold" href={"/soildata"}>Soil Data</Link>
          </>
        ) : (
          <>
            <Link className="text-white font-bold" href={"/soildata"}>Soil Data</Link>
          </>
        )}
      </div>
      {session ? (
        <>
          <span>
            Hello, {session?.user?.email}
            <button
              onClick={() => signOut()}
              className="text-white font-bold px-3 underline"
            >
              Log Out
            </button>
          </span>
        </>
      ) : (
        <div>
          <button className="text-white font-bold px-3">
            <Link href={"/"}>Sign In</Link>
          </button>
          <button className="text-white font-bold px-3">
            <Link href={"/register"}>Sign Up</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
