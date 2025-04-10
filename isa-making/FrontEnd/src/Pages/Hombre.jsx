import React from 'react';
import '../styles/Hombre.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta o ajusta la ruta
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const Hombre = () => {
    const productos = [
        {
            id: 1,
            imagen: "https://2.bp.blogspot.com/-P4Xa2UkmzmM/Wtatz1DXkpI/AAAAAAAC6Kg/UH8Mnl4QVrUYpiW_3ADplB_-Qb2WPmJqQCLcBGAs/s1600/Vestidos-Rosados-largos-1.JPG",
            nombre: "Vestido Rosado",
            descripcion: "Vestido elegante en tono rosado ideal para eventos formales.",
            precio: "$49.99"
        },
        {
            id: 2,
            imagen: "https://i.etsystatic.com/12068282/r/il/87efa3/1110144747/il_794xN.1110144747_bzyc.jpg",
            nombre: "Blusa Blanca",
            descripcion: "Blusa ligera y fresca para días cálidos.",
            precio: "$29.99"
        },
        {
            id: 3,
            imagen: "https://media.istockphoto.com/photos/mens-trousers-picture-id510615049?k=20&m=510615049&s=612x612&w=0&h=V2qWdnou1w6ctJnfiRlYxQp6QwgX8yRMBBOCMxm7ei0=",
            nombre: "Pantalón Casual",
            descripcion: "Pantalón cómodo en color cafe, perfecto para el día a día.",
            precio: "$39.99"
        },
        {
            id: 4,
            imagen: "https://i.pinimg.com/originals/c5/80/d6/c580d6f9062ce973c37760524dea07a5.jpg",
            nombre: "Falda Floral",
            descripcion: "Falda con diseño floral y tonos rosados.",
            precio: "$34.99"
        },
        // Agrega más productos aquí si lo deseas
    ];

    return (
        <div>
            <header>
                ISA-MAKING
            </header>

            <nav className="tienda-nav">
                <a href="index.html">Inicio</a>
                <a href="hombre.html">Hombre</a>
                <a href="mujer.html">Mujer</a>
                <a href="niños.html">Niños</a>
                <a href="#">Ofertas</a>
                <a href="#">Contacto</a>
            </nav>

            <section className="products">
                {productos.map(producto => (
                    <div className="product" key={producto.id}>
                        <img className="imagen" src={producto.imagen} alt={`Producto ${producto.id}`} />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <p className="price">{producto.precio}</p>
                        <button>Agregar al Carrito</button>
                    </div>
                ))}
            </section>

            <footer>
                &copy; 2024 ISA-MAKING - Todos los derechos reservados
            </footer>
        </div>
    );
}

export default Hombre;
