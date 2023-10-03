import React, { useState, useEffect } from 'react';

export const ProveedorForm = () => {
  const [proveedor, setProveedor] = useState({
    nombre: '',
    direccion: '',
    correo: '',
    telefono: '',
  });
  const [mensaje, setMensaje] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [proveedores, setProveedores] = useState([]);
  const [editarProveedor, setEditarProveedor] = useState(null);

  useEffect(() => {
    // Aquí puedes realizar una solicitud al servidor para obtener la lista de proveedores existentes.
    // Por ahora, usaremos datos de ejemplo.
    const proveedoresEjemplo = [
      { id: 1, nombre: 'Proveedor 1', direccion: 'Dirección 1', correo: 'proveedor1@example.com', telefono: '1234567890' },
      { id: 2, nombre: 'Proveedor 2', direccion: 'Dirección 2', correo: 'proveedor2@example.com', telefono: '9876543210' },
    ];
    setProveedores(proveedoresEjemplo);
  }, []);

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

      if (editarProveedor) {
        // Si estamos editando, actualiza el proveedor existente en la lista.
        const proveedoresActualizados = proveedores.map((p) =>
          p.id === editarProveedor.id ? proveedor : p
        );
        setProveedores(proveedoresActualizados);
        setMensaje('Proveedor actualizado exitosamente');
        setEditarProveedor(null);
      } else {
        // Si no estamos editando, agrega el nuevo proveedor a la lista.
        setProveedores([...proveedores, { id: Date.now(), ...proveedor }]);
        setMensaje('Proveedor creado exitosamente');
      }

      setProveedor({ nombre: '', direccion: '', correo: '', telefono: '' });
    } catch (error) {
      // Manejo de errores en caso de fallo al enviar los datos
      console.error('Error al enviar datos:', error);
      setMensaje('Hubo un error al crear o actualizar el proveedor. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditarProveedor = (proveedor) => {
    setProveedor(proveedor);
    setEditarProveedor(proveedor);
  };

  const handleEliminarProveedor = (id) => {
    const proveedoresFiltrados = proveedores.filter((p) => p.id !== id);
    setProveedores(proveedoresFiltrados);
    setMensaje('Proveedor eliminado exitosamente');
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center mt-5">REGISTRAR/EDITAR PROVEEDOR</h1>
      <hr className="w-50 mx-auto mb-4" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre completo del proveedor
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
          <label htmlFor="correo" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={proveedor.correo}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={proveedor.telefono}
            onChange={(e) => {
              // Utilizamos una expresión regular para permitir solo números
              const inputValue = e.target.value.replace(/\D/g, '');
              setProveedor({ ...proveedor, telefono: inputValue });
            }}
            required
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Guardando...' : editarProveedor ? 'Actualizar Proveedor' : 'Registrar Proveedor'}
        </button>
      </form>
      {mensaje && <div className={`alert ${mensaje.includes('error') ? 'alert-danger' : 'alert-success'} mt-3`}>{mensaje}</div>}
      <h2 className="display-4 text-center mt-5">LISTA DE PROVEEDORES</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Correo Electrónico</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.direccion}</td>
              <td>{p.correo}</td>
              <td>{p.telefono}</td> 
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleEditarProveedor(p)}>
                  Editar
                </button>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => handleEliminarProveedor(p.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
