// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db'); // Asegúrate de que la ruta sea correcta
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Debes llenar todos los campos' });
  }

  try {
    const [results] = await req.db.query('SELECT * FROM cliente WHERE email = ?', [email]);

    if (results.length === 0) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    const usuario = results[0];
    const match = await bcrypt.compare(password, usuario.clave);

    if (!match) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    res.status(200).json({ message: 'Login exitoso', usuario: { id: usuario.id_cliente, nombre: usuario.nombre } });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


router.post('/registrar', async (req, res) => {
    const { nombre, email, telefono , password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    if (!email || !password || !nombre || !telefono) {
      return res.status(400).json({ message: 'Debes llenar todos los campos' });
    }

    console.log(req.body);

    const values = [nombre, email, telefono, hashedPassword, 2];
  
    try {
      const [results] = await req.db.query('INSERT INTO `cliente`(`nombre`, `email`, `telefono`, `clave`, rol) VALUES (?)', [values]);
  
      if (results.length === 0) {
        return res.status(401).json({ message: 'Datos incorrectos' });
      }

  
      res.status(200).json({ message: 'Registro exitoso'});
    } catch (error) {
      console.error('Error al registrar', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });

module.exports = router;
