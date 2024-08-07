"use client"
import Link from 'next/link';
import BookDetails from './bookItem';
import React from 'react';
import NavBar from '@/app/components/navBar';



export default function homepage(){

    return(
        <div>
            <NavBar/>
        <main>
            <BookDetails/>
        </main>
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