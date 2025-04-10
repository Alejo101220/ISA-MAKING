import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({
        nombre: '',
        categoria: '',
        precio: '',
        cantidad: ''
    });

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        const res = await axios.get('http://localhost:3000/api/productos');
        setProductos(res.data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/productos', form);
        setForm({ nombre: '', categoria: '', precio: '', cantidad: '' });
        fetchProductos();
    };

    const eliminarProducto = async (id) => {
        await axios.delete(`http://localhost:3000/api/productos/${id}`);
        fetchProductos();
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>

            <form onSubmit={handleSubmit} className="mb-6">
                <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
                <select name="categoria" value={form.categoria} onChange={handleChange} required>
                    <option value="">Categoría</option>
                    <option value="1">Hombre oversize</option>
                    <option value="2">Mujer oversize</option>
                </select>
                <input type="number" name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} required />
                <input type="number" name="cantidad" placeholder="Cantidad" value={form.cantidad} onChange={handleChange}
                    required />
                <button type="submit">Agregar</button>
            </form>

            <table className="w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((p) => (
                        <tr key={p.id_producto}>
                            <td>{p.id_producto}</td>
                            <td>{p.nombre}</td>
                            <td>{p.categoria}</td>
                            <td>${p.precio}</td>
                            <td>{p.cantidad}</td>
                            <td>
                                <button onClick={() => eliminarProducto(p.id_producto)}>Eliminar</button>
                                {/* Aquí puedes usar navegación para editar si tienes React Router */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;