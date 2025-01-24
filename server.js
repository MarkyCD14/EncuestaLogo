const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware para permitir solicitudes CORS
app.use(cors());

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Sirve archivos estáticos (como imágenes y CSS) desde la carpeta "images"
app.use(express.static(path.join(__dirname, 'publiclogos')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar los datos del formulario
app.post('/submit', (req, res) => {
    console.log('Datos recibidos:', req.body);
    res.status(200).send('Datos recibidos correctamente');
});

// Inicia el servidor en el puerto 3001
const port = 3001;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
