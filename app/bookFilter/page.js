"use client"
import Link from 'next/link';
import CategoryInfo from './categoryInfo';
import CategoryList from './category-list';


export default function BookFilter(){

    return(
        <div className='h-screen '>

            <header className="bg-white shadow-md">

                
                <div className="container mx-auto flex items-center justify-between py-4 px-6">

                <Link href={'./homepage/'}>
                    <div className="flex flex-col items-center justify-center">
                        <img src="/logo.jpg" alt="Description of the image" className=" mr-2 h-10" />
                        <h1 className='text-xl font-bold text-black'>BOOKIE</h1>
                    </div>
                    </Link>
                <div className='flex items-center space-x-4'>
                    <button className='flex items-center'>
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