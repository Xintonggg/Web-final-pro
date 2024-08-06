import React, { useEffect, useState } from 'react';
import CategoryItem from './categoryItem'; 

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://api.itbook.store/1.0/new')
        .then(response => response.json())
        .then(data => {
            setCategories(data.books);
        });
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {categories.slice(0, 9).map((book, index) => (
                <CategoryItem
                    key={index}
                    src={book.image}
                    title={book.title}
                    subtitle={book.subtitle}
                    isbn={book.isbn13}
                    price={book.price}
                    url={book.url}
                />
            ))}
        </div>
    );
}
