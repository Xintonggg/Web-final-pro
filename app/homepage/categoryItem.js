import Link from 'next/link';
import React from 'react';

export default function CategoryItem({ src, title, subtitle, isbn, price, url }) {
    return (
        <div className="bg-white shadow-md  border-2 border-transparent hover:border-green-400">
            <Link href={url}>
                <div>
                    <img src={src} alt={title} className="w-full h-auto object-cover " />
                    <h1 className="text-lg font-bold">{title}</h1>
                    <h2 className="text-sm text-gray-600">Subtitle: {subtitle}</h2>
                    <p className="text-sm text-gray-600">ISBN: {isbn}</p>
                    <p className="text-sm text-gray-600">Price: {price}</p>
                </div>
            </Link>
        </div>
    );
}
