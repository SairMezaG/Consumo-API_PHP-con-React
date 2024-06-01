// BotonEliminar.jsx
import React from 'react';

const BotonEliminar = ({ id, onEliminar }) => {
  const handleEliminar = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      fetch(`http://localhost/TrabajoPHP_JS_API/?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({id:id}),
      })
        .then((respuesta) => respuesta.json())
        .then((data) => {
          console.log('Producto eliminado:', data);
          onEliminar(id);
        })
        .catch((error) => {
          console.error('Error al eliminar el producto:', error);
        });
    }
  };

  return (
    <button onClick={handleEliminar}>Eliminar</button>
  );
};

export default BotonEliminar;
