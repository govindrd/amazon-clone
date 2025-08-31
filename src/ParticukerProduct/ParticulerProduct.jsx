import React from 'react'
import './ParticulerProduct.css';

export default function ParticulerProduct() {
const { id } = useParams();

  // In real projects, fetch product info by `id` from DB or state
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details for ID: {id}</h1>
      {/* Show product image, title, price, description here */}
    </div>
  );
}

5