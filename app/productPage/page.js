import Link from "next/link"
import React from "react"
import ProductDetail from "./productDetails"
import CategoryInfo from "./categoryInfo"

export default function Product(){

    return(
        <div className='h-screen'>

            <header className="bg-white shadow-md">

                
                <div className="container mx-auto flex items-center justify-between py-4 px-6">
                    <div className='flex items-center space-x-1'>
                        <h1 className='flex items-center px-3'>Top</h1>
                        <h1 className='flex items-center px-3'>Top</h1>
                        <h1 className='flex items-center px-3'>Top</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src="/laptop.jpg" alt="Description of the image" className=" mr-2 h-10" />
                        <h1 className='text-xl font-bold text-black'>TOP Tradings</h1>
                        
                    </div>
                    
                <div className='flex items-center space-x-4'>
                    <button className='flex items-center'>
                       <Link href={"./searchPage/"}>
                        <div className='flex items-center space-x-1'>
                            <img src ='/search.jpg' alt = 'search' className="h-6 w-6"/>
                            <span className=" text-black">SEARCH</span>
                        </div>
                           
                        </Link>
                    </button>
                    <div>
                        <Link href={"./shoppingCart/"}>
                            <img src='/shoppingCart.jpg' alt-="shoppingCart" className ="h-8 w-8 "/>
                        </Link>
                    </div>
                
                    <button className="bg-blue-500 text-white px-4 py-2 rounded"> 
                        <Link href={"./logIn/"}>LOG IN </Link>
                    </button>

                    </div>
              
                </div>

            </header>
            <section className="relative space-x-11 bg-white px-20 py-5">
                <ProductDetail/>
            </section>

            <section className="bg-white 'space-x-1 px-20 py-5 ">
                
                <h1 className='text-2xl text-black py-4 px-6'>Related products</h1>
                <CategoryInfo/>
                
            </section>
            <div>
                
            </div>


            <footer className='bg-blue-200 h-40'>
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

