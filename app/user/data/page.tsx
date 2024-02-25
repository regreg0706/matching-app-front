'use client';
import React, { useState, useEffect } from 'react';

interface Item {
    name: string;
    email: string;
}

const Home: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/user/data`)
            .then(response => response.json())
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    });

  return (
    <div>
                    {items.map((item,index) => (
                        <div key={index}>
                            <h3>email: {item.email} :{item.name}</h3>
                        </div>
                    ))}
    </div>
  );
};

export default Home;