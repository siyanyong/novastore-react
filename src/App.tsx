import React from 'react';
import ProductList from './components/ProductList';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>NovaStore</h1>
      <ProductList />
    </div>
  );
};

export default App;
