import React from 'react';
import CategoryItem from './categoryItem';

export default function CategoryInfo(){

    const categories = [
        {src: "/category1.jpg/", title: "Category 1", name: "Category 1", description: "Description of first Category"},
        { src: "/category2.jpg", title: "Category 2", name: "Category 2",description: "Description of second Category" },
        { src: "/category3.jpg", title: "Category 3", name: "Category 3",description: "Description of third Category" },
        
    ];

    return(
        <ul className="grid grid-cols-3 gap-4">
           {categories.map((category, index) => (
          <CategoryItem
            key={index}
            src={category.src}
            title={category.title}
            name = {category.name}
            description={category.description}
          />
        ))}
        </ul>
    );
}
