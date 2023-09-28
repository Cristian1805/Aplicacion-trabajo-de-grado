import React, { useState } from 'react';

export const ProveedorForm = () => {
  const [proveedor, setProveedor] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
  });
  const [mensaje, setMensaje] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí puedes realizar la función para enviar los datos del proveedor al servidor.
      // Puedes usar una función asincrónica y manejar errores adecuadamente.

      // Simulación de espera para demostrar la experiencia de usuario
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Para este ejemplo, simplemente mostraremos el mensaje
      setMensaje('Proveedor creado exitosamente');
    } catch (error) {
      // Manejo de errores en caso de fallo al enviar los datos
      console.error('Error al enviar datos:', error);
      setMensaje('Hubo un error al crear el proveedor. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h1 className='display-4 text-center mt-5' >REGISTRAR PROVEEDOR</h1>
      <hr className='w-50 mx-auto mb-4' />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre del proveedor
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={proveedor.nombre}
            onChange={handleInputChange}
            required
            disabled={isSubmitting} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección del proveedor
          </label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={proveedor.direccion}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono del proveedor
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={proveedor.telefono}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Registrando...' : 'Registrar Proveedor'}
        </button>
      </form>
      {mensaje && <div className={`alert ${mensaje.includes('error') ? 'alert-danger' : 'alert-success'} mt-3`}>{mensaje}</div>}
    </div>
  );
};
