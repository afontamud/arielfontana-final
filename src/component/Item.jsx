import React from 'react';
import ItemCont from './ItemCont';


const Item = (item) => {
  const onAdd = (qty) => {
    alert(`Has añadido ${qty} al carrito`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={item.thumbnail} alt="" />

      <h3 className="product-card__name">{item.name}</h3>

      <span className="product-card__name">${item.price}</span>

      <ItemCont stock={item.stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;