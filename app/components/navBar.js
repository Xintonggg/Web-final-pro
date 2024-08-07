"use client"
import Link from 'next/link';
import React from 'react';

export default function NavBar(){

    return(
        

        <header className="bg-white shadow-md">

            
            <div className="container mx-auto flex items-center justify-between py-4 px-6">

            <Link href={'./homepage/'}>
                <div className="flex flex-col items-center justify-center  border-2 border-transparent hover:border-green-400">
                    <img src="/logo.jpg" alt="Description of the image" className=" mr-2 h-10" />
                    <h1 className='text-xl font-bold text-black'>BOOKIE</h1>
                </div>
                </Link>
            <div className='flex items-center space-x-4'>
                <button className='flex items-center border-2 border-transparent hover:border-green-400'>
                   <Link href={"./bookFilter/"}>
                        <div className='flex items-center space-x-1'>
                            <img src ='/search.jpg' alt = 'search' className="h-6 w-6"/>
                            <span className=" text-black">SEARCH</span>
                        </div>
                   </Link>
                </button>
                
            
                <button className="bg-green-300 text-white px-4 py-2 rounded"> 
                    <Link href={"./logIn/"}>LOG IN </Link>
                </button>

                </div>
          
            </div>

    </header>
    );
}