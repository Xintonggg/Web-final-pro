"use client"
import Link from 'next/link';
import NavBar from '../components/navBar';
import CategoryList from './category-list';


export default function BookFilter(){

    return(
        <div className='h-screen '>
            <NavBar/>
            

        <main>
            <div className='space-x-11 bg-white px-10 py-5'>
                <div className='bg-green-50 rounded-2xl px-20 py-5'>
                <h1 className='text-black text-3xl font-bold'>All Books</h1>
                <CategoryList/>
                </div>
            </div>
            
            
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