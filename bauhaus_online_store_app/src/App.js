import Header from "./components/Header";
import Nav from "./components/Nav";
import { useState } from 'react';
import { Context } from './context'
import { categoryCards } from "./data/categoryCards";
import './App.css'
import CategoryContainer from "./components/CategoryContainer";

function App() {

  const [categoryCard, setCategoryCard] = useState(categoryCards);

  return (
    <div>
      <Context.Provider value={{ categoryCard }}>
        <Nav />
        <Header />
        <CategoryContainer />
      </Context.Provider>

    </div>
  );
}

export default App;
