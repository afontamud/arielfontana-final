import React from 'react';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';
import Hero from './component/Hero.jsx';
import ItemDetailContainer from './component/ItemDetailContainer';


export default function App() {
  return (
    <>
      <NavBar />
      <Hero title="Hysteria Shop" />
      <ItemListContainer />
  
    </>
  );
}
