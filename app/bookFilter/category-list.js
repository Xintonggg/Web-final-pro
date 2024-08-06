'use client';

import React, { useState, useEffect } from 'react';
import CategoryItem from './categoryItem';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then(response => response.json())
      .then(data => {
        setCategories(data.books);
      });
  }, []);

  const handleSelect = (itemName) => {
    setSelectedItem(itemName);
  };

  const sortedItems = [...categories].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'priceAsc':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'priceDesc':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-full  rounded-xl bg-white">
      <div className="flex space-x-4 mb-4 mx-10 my-10 py-3">
        <button
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-green-200 text-white' : 'bg-gray-300'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === 'priceAsc' ? 'bg-green-200 text-white' : 'bg-gray-300'}`}
          onClick={() => setSortBy('priceAsc')}
        >
          Sort by Price Ascending
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === 'priceDesc' ? 'bg-green-200 text-white' : 'bg-gray-300'}`}
          onClick={() => setSortBy('priceDesc')}
        >
          Sort by Price Descending
        </button>
       </div>
       <main className='rounded-xl'>
            <div className="grid grid-cols-3 gap-4 mx-20 my-4">
                {sortedItems.map((book, index) => (
                <CategoryItem
                    key={`${book.title}-${index}`}
                    src={book.image}
                    title={book.title}
                    subtitle={book.subtitle}
                    isbn={book.isbn13}
                    price={book.price}
                    url={book.url}
                    onSelect={handleSelect}
                    isSelected={selectedItem === book.title}
                />
                ))}
            </div>
        </main>
    </div>
  );
}
