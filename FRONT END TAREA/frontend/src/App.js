import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]);
  const [mostrarTabla, setMostrarTabla] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/productos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  const handleConsultarProductos = () => {
    setMostrarTabla(true);
  };

  return (
    <div>
      <h1>LISTA DE PRODUCTOS</h1>
      <button onClick={handleConsultarProductos}>CONSULTAR PRODUCTOS</button>
      {mostrarTabla && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
