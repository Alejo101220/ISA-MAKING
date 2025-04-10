import React, { useState } from 'react';
import '../styles/Mujer.css';
import ProductCard from './ProductCard';

const productos = [
    {
        image: 'https://2.bp.blogspot.com/-P4Xa2UkmzmM/Wtatz1DXkpI/AAAAAAAC6Kg/UH8Mnl4QVrUYpiW_3ADplB_-Qb2WPmJqQCLcBGAs/s1600/Vestidos-Rosados-largos-1.JPG',
        title: 'Vestido Rosado',
        description: 'Vestido elegante en tono rosado ideal para eventos formales.',
        price: '$49.99'
    },
    {
        image: 'https://i.etsystatic.com/12068282/r/il/87efa3/1110144747/il_794xN.1110144747_bzyc.jpg',
        title: 'Blusa Blanca',
        description: 'Blusa ligera y fresca para días cálidos.',
        price: '$29.99'
    },
    {
        image: 'https://media.istockphoto.com/photos/mens-trousers-picture-id510615049?k=20&m=510615049&s=612x612&w=0&h=V2qWdnou1w6ctJnfiRlYxQp6QwgX8yRMBBOCMxm7ei0=',
        title: 'Pantalón Casual',
        description: 'Pantalón cómodo en color cafe, perfecto para el día a día.',
        price: '$39.99'
    },
    {
        image: 'https://i.pinimg.com/originals/c5/80/d6/c580d6f9062ce973c37760524dea07a5.jpg',
        title: 'Falda Floral',
        description: 'Falda con diseño floral y tonos rosados.',
        price: '$34.99'
    },
    // Repetidos
    ...Array(8).fill({
        image: 'https://2.bp.blogspot.com/-P4Xa2UkmzmM/Wtatz1DXkpI/AAAAAAAC6Kg/UH8Mnl4QVrUYpiW_3ADplB_-Qb2WPmJqQCLcBGAs/s1600/Vestidos-Rosados-largos-1.JPG',
        title: 'Vestido Rosado',
        description: 'Vestido elegante en tono rosado ideal para eventos formales.',
        price: '$49.99'
    })
];

const Mujer = () => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    return (
        <div>
            <header>
                ISA-MAKING
            </header>

            <nav className="tienda-nav">
                <a href="index.html">Inicio</a>
                <a href="hombre.html">Hombre</a>
                <a href="mujer.HTML">Mujer</a>
                <a href="niños.html">Niños</a>
                <a href="#">Ofertas</a>
                <a href="#">Contacto</a>
            </nav>

            <section className="products">
                {productos.map((prod, index) => (
                    <ProductCard
                        key={index}
                        image={prod.image}
                        title={prod.title}
                        description={prod.description}
                        price={prod.price}
                        onAddToCart={() => agregarAlCarrito(prod)}
                    />
                ))}
            </section>

            <section className="carrito">
                <h2>🛒 Carrito</h2>
                {carrito.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <ul>
                        {carrito.map((item, index) => (
                            <li key={index}>
                                {item.title} - {item.price}
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <footer>
                &copy; 2024 ISA-MAKING - Todos los derechos reservados
            </footer>
        </div>
    );
};

export default Mujer;


