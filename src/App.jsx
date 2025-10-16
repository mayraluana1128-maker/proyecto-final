import { useState } from 'react';
import './App.css';


import taza from './assets/taza.jpg';
import velas from './assets/velas.jpg';
import cuaderno from './assets/cuaderno.jpg';
import portavasos from './assets/portavasos.jpg';
import maceta from './assets/maceta.jpg';
import plantables from './assets/plantables.jpg';
import lapizanotador from './assets/lapiz, anotador.jpg';
import billetera from './assets/billeteraHombre.jpg';
import carteritas from './assets/carteritasmujer.jpg';


import Navbar from './Navbar/Navbar';

function App() {
  const productos = [
    { id: 1, nombre: 'Taza artesanal', precio: '$2500', categoria: 'Hogar', imagen: taza },
    { id: 2, nombre: 'Velas aromáticas', precio: '$1800', categoria: 'Decoración', imagen: velas },
    { id: 3, nombre: 'Cuaderno hecho a mano', precio: '$3200', categoria: 'Papelería', imagen: cuaderno },
    { id: 4, nombre: 'Portavasos de madera', precio: '$1500', categoria: 'Hogar', imagen: portavasos },
    { id: 5, nombre: 'Maceta decorativa', precio: '$2200', categoria: 'Decoración', imagen: maceta },
    { id: 6, nombre: 'Lápiz plantable', precio: '$750', categoria: 'Souvenirs', imagen: plantables },
    { id: 7, nombre: 'Lápiz plantable + Anotador', precio: '$2300', categoria: 'Souvenirs', imagen: lapizanotador },
    { id: 8, nombre: 'Billetera Hombre', precio: '$10000', categoria: 'Accesorios', imagen: billetera },
    { id: 9, nombre: 'Carterita Mujer', precio: '$10000', categoria: 'Accesorios', imagen: carteritas },
  ];

  
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  
  const productosFiltrados = productos.filter((producto) => {
    const cumpleCategoria =
      categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
    const cumpleBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return cumpleCategoria && cumpleBusqueda;
  });

  return (
    <div className="App">
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
        Bienvenido a Mayuri Store 🌿
      </h1>
      <h2 style={{ textAlign: 'center', color: '#555', marginBottom: '30px' }}>
        Creamos regalos para toda ocasión y así sorprender a quien más querés.
        Hacemos que regalar sea fácil 😉💓.
        Podés armar tu box 🎁con los artículos que más te gusten! Mirá nuestro catálogo en wsp.
      </h2>
       
      <main className="app-container">
        <h1>Catálogo de Productos</h1>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="buscador"
        />

        <div className="categorias">
          {['Todos', 'Hogar', 'Decoración', 'Papelería', 'Souvenirs', 'Accesorios'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={categoriaSeleccionada === cat ? 'btn-activo' : 'btn'}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="catalogo">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <div key={producto.id} className="producto-card">
                <img src={producto.imagen} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <p className="categoria">{producto.categoria}</p>
              </div>
            ))
          ) : (
            <p className="no-productos">No se encontraron productos.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;