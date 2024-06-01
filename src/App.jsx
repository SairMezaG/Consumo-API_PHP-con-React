import { useState } from 'react'
import TablaDatos from './Componentes/Tabla'
import BotonAgregar from './Componentes/BotonAgregar';

function App() {
  //! funcion que me dio chat para agregar productos
  const agregarClase = (nuevoProducto) => {
    fetch('http://localhost/TrabajoPHP_JS_API/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoProducto),
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log('Producto agregado:', data);
        // Puedes agregar aquí lógica adicional si lo necesitas, como volver a cargar los datos de la tabla
      })
      .catch((error) => {
        console.error('Error al agregar el producto:', error);
      });
  };


  return (
    <>
      <h1>Consumo de API</h1>
      <TablaDatos/>
      <BotonAgregar onAgregar={agregarClase} />
    </>
  )
}

export default App
