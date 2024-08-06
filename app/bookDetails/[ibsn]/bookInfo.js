import React from 'react';

export default function BookInfo({ src, title, subtitle, isbn, price, desc }) {
  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold">{title}</h1>
      <img src={src} alt={title} className="w-full h-auto object-contain" />
      <h2 className="text-sm text-gray-600">Subtitle: {subtitle}</h2>
      <p className="text-sm text-gray-600">{desc}</p>
      <p className="text-lg font-bold">ISBN: {isbn}</p>
      <p className="text-lg font-bold">${price}</p>
    </div>
  );
}
