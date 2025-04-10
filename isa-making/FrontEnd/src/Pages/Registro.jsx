import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Registro.css';

const RegistroPage = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        telefono: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/registrar', usuario);

            if (response.status === 200) {
                alert('Registro exitoso');
                window.location.href = '/iniciosesion'; 

            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Error al registrarse');
        }
    };

    return (
        <>
            <header>ISA-MAKING</header>

            <div className="container-registro">
                <h1>Registro</h1>
                <div className="form-container-registro">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={usuario.nombre}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={usuario.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={usuario.password}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="telefono">Teléfono:</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={usuario.telefono}
                            onChange={handleChange}
                            required
                        />

                        <input type="submit" value="Registrarse" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegistroPage;
