import React from 'react';

const ProductCard = ({ image, title, description, price, onAddToCart }) => (
    <div className="product">
        <img className="imagen" src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
        <button onClick={onAddToCart}>Agregar al Carrito</button>
    </div>
);

export default ProductCard;