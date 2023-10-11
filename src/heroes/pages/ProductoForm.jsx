import React, { useState } from 'react';

export const ProductoForm = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
  });
  const [mensaje, setMensaje] = useState(''); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes enviar los datos del producto al servidor o realizar cualquier acción necesaria
    // Para este ejemplo, simplemente mostraremos el mensaje
    setMensaje('Producto creado exitosamente');
  };

  return (
    <div className="container">
      <h1 className='display-4 text-center mt-5'> ENTRADA PRODUCTO</h1>
      <hr className='w-50 mx-auto mb-4' />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label"> 
            Nombre del producto
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={producto.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">
            Precio del producto
          </label>
          <input
            type="text"
            className="form-control"
            id="precio"
            name="precio"
            value={producto.precio}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción del producto
          </label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Producto
        </button>
      </form>
      {mensaje && <div className="alert alert-success mt-3">{mensaje}</div>}
    </div>
  );
};
