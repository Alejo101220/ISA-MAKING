// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware para compartir la conexión de base de datos
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Rutas
app.use('/auth', require('./routes/auth'));
app.use('/admin', require('./routes/admin')); //
// app. Puedes crearla luego

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
