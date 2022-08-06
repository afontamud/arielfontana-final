import React from 'react';
import ItemCont from './ItemCont';

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty}`);
  };

  console.log(item);
  return (
    <article className="product-detail">
      <img src={item.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>
          <li>Size:</li>
          <li>{item.size}</li>
          <li>Vendor:</li>
          <li>{item.vendor}</li>
          <li>Type:</li>
          <li>{item.type}</li>
        </ul>
        <ItemCont stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
};

export default ItemDetail;