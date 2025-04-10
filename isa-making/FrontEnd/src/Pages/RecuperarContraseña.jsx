import React from 'react';
import '../styles/RecuperarContraseña.css';

const RecuperarContrasenaPage = () => {
    return (
        <div className="recuperar-container">
            <h2>Recuperar Contraseña</h2>
            <form action="../php/recuperar_contraseña.php" method="POST">
                <label className="recuperar" htmlFor="email">
                    Introduce tu correo electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Escribe tu email"
                    required
                />

                <label className="recuperar" htmlFor="new-password">
                    Introduce tu nueva contraseña
                </label>
                <input
                    type="password"
                    id="new-password"
                    name="new-password"
                    placeholder="Escribe tu contraseña"
                    required
                />

                <label className="recuperar" htmlFor="confirm-password">
                    Confirmar contraseña
                </label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Escribe tu contraseña"
                    required
                />

                <input type="submit" value="Recuperar" />
            </form>
            <p className="message">
                Te enviaremos un enlace para restablecer tu contraseña.
            </p>
        </div>
    );
};

export default RecuperarContrasenaPage;