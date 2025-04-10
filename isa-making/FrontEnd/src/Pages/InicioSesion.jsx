import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/InicioSesion.css';

const InicioSesion = () => {
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', usuario);

            if (response.status === 200) {
                alert('Inicio de sesión exitoso');
                window.location.href = '/';


                // Guarda el usuario en localStorage (puedes usar sessionStorage si prefieres)
                localStorage.setItem('usuario', JSON.stringify(response.data.usuario));

                // Redirigir al home o panel
                navigate('/iniciosesion');
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Error al iniciar sesión, verifica tus credenciales');
        }
    };

    return (
        <div>
            <header>
                ISA-MAKING
            </header>

            <div className="container">
                <h1>Inicia Sesión</h1>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
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

                        <input type="submit" value="Iniciar sesión" />

                        <div className="form-footer">
                            <p><a href="/recuperar_contraseña">¿Olvidaste tu contraseña?</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InicioSesion;
