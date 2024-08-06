'use client';

import React, { useState, useEffect } from 'react';
import BookInfo from './bookInfo';

function BookDetails({ isbn }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   

    if (!isbn) {
      setError('No ISBN provided');
      setLoading(false);
      return;
    }

    fetch(`https://api.itbook.store/1.0/books/${isbn}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCategories([data]); // 确保是一个数组
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [isbn]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {categories.map((book, index) => (
        <BookInfo
          key={index}
          src={book.image}
          title={book.title}
          subtitle={book.subtitle}
          isbn={book.isbn13}
          price={book.price}
          desc={book.desc}
        />
      ))}
    </div>
  );
}

export default BookDetails;
