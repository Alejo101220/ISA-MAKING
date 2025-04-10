import React from 'react';
import '../styles/AdmSecion.css';

export default function AdmSecion() {
    return (
        <div>
            <header>
                ISA-MAKING
            </header>

            {/* Contenido principal */}
            <div className="container">
                <h1>Administrador</h1>

                {/* Formulario de inicio de sesión */}
                <div className="form-container">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        // Aquí podés manejar el login
                        console.log('Formulario enviado');
                    }}>
                        <label htmlFor="username">Usuario:</label>
                        <input type="text" id="username" name="username" required />

                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required />

                        <input type="submit" value="Iniciar Sesión" />
                    </form>
                </div>
            </div>
        </div>
    );
}
