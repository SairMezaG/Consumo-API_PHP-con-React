// BotonEditar.jsx
import React, { useState } from 'react';

const BotonEditar = ({ id, nombreInicial, descripcionInicial, onEditar }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nombre, setNombre] = useState(nombreInicial);
  const [descripcion, setDescripcion] = useState(descripcionInicial);

  const handleSubmit = (event) => {
    event.preventDefault();
    const productoEditado = { id, nombre, descripcion };
    fetch(`http://localhost/TrabajoPHP_JS_API/?id=${id}`, {
    
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoEditado),
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log('Producto editado:', data);
        onEditar(productoEditado);
        setMostrarModal(false);
      })
      .catch((error) => {
        console.error('Error al editar el producto:', error);
      });
  };

  return (
    <div>
      <button onClick={() => setMostrarModal(true)}>Editar</button>
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <h2>Editar Producto</h2>
            <form onSubmit={handleSubmit}>
              <label>Nombre:</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <label>Descripción:</label>
              <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              <button type="submit">Guardar Cambios</button>
            </form>
            <button onClick={() => setMostrarModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotonEditar;
