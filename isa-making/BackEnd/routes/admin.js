// routes/admin.js
const express = require('express');
const router = express.Router();

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const db = req.db;
        const [productos] = await db.query(`
      SELECT i.id_producto, i.nombre, i.precio, i.cantidad, c.nombre AS categoria
      FROM inventario i
      JOIN categorias c ON i.id_categoria = c.id_categoria
    `);
        res.json({ productos });
    } catch (error) {
        res.status(500).json({ message: 'Error cargando productos', error });
    }
});

// Crear nuevo producto
router.post('/crear-producto', async (req, res) => {
    const { nombre, categoria, precio, cantidad } = req.body;
    try {
        const db = req.db;
        await db.query(
            `INSERT INTO inventario (nombre, id_categoria, precio, cantidad) VALUES (?, ?, ?, ?)`,
            [nombre, categoria, precio, cantidad]
        );
        res.json({ message: 'Producto creado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error agregando producto', error });
    }
});

// Obtener datos para editar un producto
router.get('/editar-producto/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const db = req.db;
        const [[producto]] = await db.query(
            `SELECT * FROM inventario WHERE id_producto = ?`,
            [id]
        );
        const [categorias] = await db.query(`SELECT * FROM categorias`);
        res.json({ producto, categorias });
    } catch (error) {
        res.status(500).json({ message: 'Error cargando producto', error });
    }
});

// Eliminar producto
router.delete('/eliminar-producto/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const db = req.db;
        await db.query(`DELETE FROM inventario WHERE id_producto = ?`, [id]);
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error eliminando producto', error });
    }
});

module.exports = router;