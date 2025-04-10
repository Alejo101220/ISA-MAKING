import React, { useState } from 'react';
import '../styles/Carrito.css';

export default function Carrito() {
    const [cart, setCart] = useState([]);

    const addToCart = (productName, price) => {
        const newCart = [...cart, { name: productName, price }];
        setCart(newCart);
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <header>
                ISA-MAKING
            </header>

            <nav className="tienda-nav">
                <a href="#">Inicio</a>
                <a href="#">Hombre</a>
                <a href="#">Mujer</a>
                <a href="#">Niños</a>
                <a href="#">Ofertas</a>
                <a href="#">Contacto</a>
            </nav>

            <div className="product-list">
                <div className="product">
                    <h2>Camisa</h2>
                    <p>Precio: $20</p>
                    <button className="boton" onClick={() => addToCart('Camisa', 20)}>
                        Añadir al carrito
                    </button>
                </div>
                <div className="product">
                    <h2>Pantalones</h2>
                    <p>Precio: $30</p>
                    <button className="boton" onClick={() => addToCart('Pantalones', 30)}>
                        Añadir al carrito
                    </button>
                </div>
            </div>

            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <p>Total: ${total}</p>
        </div>
    );
}
