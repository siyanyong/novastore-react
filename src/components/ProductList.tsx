import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
}

const products: Product[] = [
  { id: 1, name: 'Wireless Mouse', price: '$25' },
  { id: 2, name: 'Bluetooth Keyboard', price: '$45' },
  { id: 3, name: 'HD Monitor', price: '$150' }
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      <h2>Product Listing</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
