// src/componentes/BotonAgregar.jsx
import React, { useState } from 'react';


const BotonAgregar = ({ onAgregar }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoProducto = { id, nombre, descripcion };
    onAgregar(nuevoProducto);
    setId('');
    setNombre('');
    setDescripcion('');
    setMostrarModal(false);
  };

  return (
    <div>
      <button onClick={() => setMostrarModal(true)}>Agregar Producto</button>
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <h2>Agregar Nuevo Producto</h2>
            <form onSubmit={handleSubmit}>
              <label>ID:</label>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
              <label>Nombre:</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <label>Descripción:</label>
              <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              <button type="submit">Agregar</button>
            </form>
            <button onClick={() => setMostrarModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotonAgregar;
