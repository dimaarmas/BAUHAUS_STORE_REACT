
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Context } from './context'
import { categoryCards } from "./data/categoryCards";
import { promotion } from "./data/promotion";
import './App.css'
import CategoriesPage from './pages/CategoriesPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import DescriptionPage from './pages/DescriptionPage'
import MainPage from './pages/MainPage';

function App() {

  const [categoryCard, setCategoryCard] = useState(categoryCards);
  const [promCard, setPromCard] = useState(promotion);

  return (
    <div>
      <Context.Provider value={{ categoryCard, promCard }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='category/:categories' element={<CategoriesPage />} />
            <Route path='/:id' element={<ProductsPage />} />
            <Route path='products/:id' element={<DescriptionPage />} />
            <Route path='cart' element={<CartPage />} />
          </Route>


        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
