'use client';

import { useState } from 'react';
import CategoryInfo from './categoryInfo';


    const ProductDetail = () => {
    const [mainImage, setMainImage] = useState('/product1.png'); 

    const images = [
        '/product2.jpg',
        '/product3.jpg', 
        '/product4.png',
        ]
    const changeMainImage = (src) => {
        setMainImage(src);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex -mx-4">
                <div className="relative w-full md:w-1/2 px-4">
                    <img src={mainImage} alt="Product" className="w-full h-auto mb-4" />
                    <div className="absolute bottom-10  left-3 mb-4 ml-4 flex space-x-2 ">
                        {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-10 h-10 object-cover cursor-pointer"
                            onClick={() => changeMainImage(src)}
                        />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col md:w-1/2 px-3 py-3'>
                    <h1 className='text-black text-2xl font-bold'>CREATIVE ZEN HYBRID</h1>
                    <p className=' text-gray-400 text-sm my-2'>Wireless Over-ear Headphones with Hybrid Active Noise Cancellation - White</p>
                    <p className='text-black py-2'>$120.99</p>
                    <p className='text-gray-400 text-sm'>This pair of over-ear headphones is the perfect combination of versatility and performance—wireless or wired, outdoors or indoors—and is fitted with a noise-cancelling microphone that can handle any impromptu calls. To top it off, its long-lasting battery life of up to 27 hours even with ANC enabled also means you can power through an entire day without distractions.</p>    
                    
                    <div >
                        <label className="flex items-center bg-blue-400 text-white h-8 w-auto rounded my-2 px-2"> Quantity:
                            <select className="bg-blue-400 text-white h-full ml-2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </label>
                    </div>

                    <button className='bg-blue-400 text-white h-8 w-auto rounded my-2'>Add To Cart</button>
                
                </div>

            
            
            </div>

         
            
        </div>
    );
    };

export default ProductDetail;
