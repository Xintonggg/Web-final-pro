"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className='h-screen flex justify-center items-center'
    style={{
      backgroundImage: 'url("/main.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     
    }}
  >

      {user ? (
        // user IS logged in


        <div className='h-96 w-96 shadow-lg p-8 bg-green-50 flex flex-col items-center rounded-lg'>
          <p className='text-2xl font-bold'>Welcome {user.displayName}</p>
          
          <img className="w-14" src={user.photoURL} />
          
          <button className="bg-green-300 text-white px-4 py-2 rounded"> 
                        <Link href={"./homepage/"}>Go To HomePage </Link>
          </button>

          <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
        </div>
      ) : (



        
        // user IS NOT logged in
        <div className='h-96 w-96 shadow-lg p-8 bg-green-50 flex flex-col items-center rounded-lg'>
          <div className="flex items-center">
            <img src="/logo.jpg" alt="Description of the image" className="mr-2 h-10" />
            <h1 className='font-bold'>BOOKIE</h1>
           
          </div>
          

          <h1>Log in by Github</h1>
          <button
            onClick={handleSignIn}
            className="text-lg mt-4 hover:underline bg-white rounded-md px-5"
          >
            Sign In
          </button>
        </div>

      )}
    </main>
  );
}