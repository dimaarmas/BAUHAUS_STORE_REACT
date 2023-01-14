import Header from "./components/Header";
import Nav from "./components/Nav";
import { useState } from 'react';
import { Context } from './context'
import { categoryCards } from "./data/categoryCards";
import './App.css'
import CategoryContainer from "./components/CategoryContainer";
import Form from "./components/Form";

function App() {

  const [categoryCard, setCategoryCard] = useState(categoryCards);

  return (
    <div>
      <Context.Provider value={{ categoryCard }}>
        <Nav />
        <Header />
        <CategoryContainer />
        <Form />
      </Context.Provider>
    </div>
  );
}

export default App;
