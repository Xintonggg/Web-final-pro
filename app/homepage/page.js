"use client"
import Link from 'next/link';
import CategoryInfo from './categoryInfo';
import NavBar from '../components/navBar';
import React from 'react';



export default function homepage(){

    return(
        <div className='h-screen'>
            <NavBar/>
            
        <section className="relative space-x-11 bg-white px-20 py-5">
            <img src="/main.jpg" alt="reading main photo" className="h-auto w-full" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="flex text-5xl font-bold my-4">LET'S READING</h1>
                <p>Reading is a journey through the mind</p>
                <button className="bg-green-300 text-white px-4 py-2 my-4 rounded"> 
                        <Link href={"./bookFilter/"}>Go For More Books</Link>
                </button>
            </div>

        </section>

        <section className='space-x-11 bg-white px-20 py-5'>
                <h1 className='text-black font-bold text-2xl mb-4'>Trending Books</h1>
                <CategoryInfo/>
        </section>

        
        <footer className='bg-green-200 h-40'>
            <div>
                <h3 className='text-black text-xl px-20 py-10'>Site name, address, reaching number etc </h3>
                <div className='flex px-20 py-5'>
                    <img src='/sm1.png/' alt='facebook' className='h-6 w-6 mx-6'/>
                    <img src='/sm2.png/' alt='yt' className='h-6 w-6 mx-6'/>
                    <img src='/sm3.png/' alt='in' className='h-6 w-6 mx-6'/>
                    <img src='/sm4.png/' alt='ins'className='h-6 w-6 mx-6'/>
                </div>
                
            </div>
              
        </footer>        

    </div>
        

        
    )
}