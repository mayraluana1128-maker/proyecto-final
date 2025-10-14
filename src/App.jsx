import { useState } from 'react';
import './App.css';

function App() {
  const productos = [
    { id: 1, nombre: 'Taza artesanal', precio: '$2500', categoria: 'Hogar', imagen: 'https://via.placeholder.com/150' },
    { id: 2, nombre: 'Velas aromáticas', precio: '$1800', categoria: 'Decoración', imagen: 'https://via.placeholder.com/150' },
    { id: 3, nombre: 'Cuaderno hecho a mano', precio: '$3200', categoria: 'Papelería', imagen: 'https://via.placeholder.com/150' },
    { id: 4, nombre: 'Portavasos de madera', precio: '$1500', categoria: 'Hogar', imagen: 'https://via.placeholder.com/150' },
    { id: 5, nombre: 'Maceta decorativa', precio: '$2200', categoria: 'Decoración', imagen: 'https://via.placeholder.com/150' },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((producto) => {
    const cumpleCategoria = categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
    const cumpleBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return cumpleCategoria && cumpleBusqueda;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Catálogo de Productos</h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: '5px 10px',
          marginBottom: '20px',
          width: '200px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      {/* Botones de categorías */}
      <div style={{ marginBottom: '20px' }}>
        {['Todos', 'Hogar', 'Decoración', 'Papelería'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            style={{
              marginRight: '10px',
              padding: '5px 10px',
              borderRadius: '5px',
              border: categoriaSeleccionada === cat ? '2px solid blue' : '1px solid #ccc',
              background: categoriaSeleccionada === cat ? '#e0f0ff' : '#fff',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Catálogo */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {productosFiltrados.map((producto) => (
          <div
            key={producto.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <p style={{ fontStyle: 'italic', color: '#555' }}>{producto.categoria}</p>
          </div>
        ))}

        {productosFiltrados.length === 0 && <p>No se encontraron productos.</p>}
      </div>
    </div>
  );
}

export default App;
