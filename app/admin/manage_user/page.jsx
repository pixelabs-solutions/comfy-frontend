'use client'
import React from 'react';
import Table from '../components/ManageUserTable';

const App = () => {
  const columns = [
    { label: 'Product', key: 'product' },
    { label: 'Price', key: 'price' },
    { label: 'Discount', key: 'discount' },
    { label: 'Sold', key: 'sold' },
    { label: 'Source', key: 'source' },
  ];

  const data = [
    {
      product: 'Headphone',
      image: '/assets/images/product-headphones.jpg',
      category: 'Digital',
      price: '$168.09',
      discount: '$60.09',
      sold: '170',
      source: 'Direct',
    },
    {
        product: 'Headphone',
        image: '/assets/images/product-headphones.jpg',
        category: 'Digital',
        price: '$168.09',
        discount: '$60.09',
        sold: '170',
        source: 'Direct',
      },
      {
        product: 'Headphone',
        image: '/assets/images/product-headphones.jpg',
        category: 'Digital',
        price: '$168.09',
        discount: '$60.09',
        sold: '170',
        source: 'Direct',
      },
    // Add more rows as needed
  ];

  return <Table columns={columns} data={data} />;
};

export default App;
