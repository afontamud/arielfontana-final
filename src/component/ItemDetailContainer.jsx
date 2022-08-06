import React from 'react';
import react, { useEffect, useState } from 'react';
import { getProductById } from '../data/getData';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    getProductById(Number(id), setProduct);
    console.log(product);
  }, [id]);
  
  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Cargando...</p>}
    </section>
  );
};

export default ItemDetailContainer;