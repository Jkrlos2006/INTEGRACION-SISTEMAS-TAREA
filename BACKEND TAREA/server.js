const express = require('express');
const cors = require('cors'); // Importa el middleware CORS
const app = express();
const PORT = 3000; 

const productos = [
  { id: 1, nombre: 'Corbata', precio: 10, },
  { id: 2, nombre: 'Saco', precio: 20 },
  { id: 3, nombre: 'Pantalon', precio: 30 },
  { id: 4, nombre: 'Camisa', precio: 30 },
];

// Habilita CORS para todas las solicitudes
app.use(cors());

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
