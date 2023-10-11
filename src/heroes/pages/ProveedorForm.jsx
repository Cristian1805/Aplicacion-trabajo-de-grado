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
  const [updater, setUpdater] = useState(0)

  const [confirmarEliminar, setConfirmarEliminar] = useState(false);
  const [proveedorAEliminar, setProveedorAEliminar] = useState(null); 

  useEffect(() => {
    fetch("http://127.0.0.1:5174/proveedores", { 
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => response.json())
    .then((json) => {
      setProveedores(json)
      console.log(proveedores)      
    })
    // Por ahora, usaremos datos de ejemplo.
    const proveedoresEjemplo = [
      { id: 1, nombre: 'Proveedor 1', direccion: 'Dirección 1', correo: 'proveedor1@example.com', telefono: '1234567890' },
      { id: 2, nombre: 'Proveedor 2', direccion: 'Dirección 2', correo: 'proveedor2@example.com', telefono: '9876543210' },
      { id: 1, nombre: 'Proveedor 1', direccion: 'Dirección 1', correo: 'proveedor1@example.com', telefono: '1234567890' },
      { id: 2, nombre: 'Proveedor 2', direccion: 'Dirección 2', correo: 'proveedor2@example.com', telefono: '9876543210' },
    ];
    setProveedores(proveedoresEjemplo);   
  }, [updater])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const crearProovedor = async () => {
    await fetch("http://127.0.0.1:5174/proveedores", {
      method: "POST",
      body: JSON.stringify(proveedor),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then((response) => response.json())
    .then((json) => {
      console.log(json)
      setUpdater(updater+1)
      setProveedor({ nombre: '', direccion: '', correo: '', telefono: '' });
    })    
  }

  const actualizarProovedor = async () => {
    await fetch("http://127.0.0.1:5174/proveedores/"+editarProveedor._id, {
      method: "PUT",
      body: JSON.stringify(proveedor),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then((response) => response.json())
    .then((json) => {
      console.log(json)
      setUpdater(updater+1)
      setProveedor({ nombre: '', direccion: '', correo: '', telefono: '' });
      setEditarProveedor(null)
    })    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);    
    try {
      if(editarProveedor){
        actualizarProovedor()
      } else {
        crearProovedor()
      }
    } catch (error) {      
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
    //Confirmacion para eliminar el proveedor
    setProveedorAEliminar(id);
    setConfirmarEliminar(true);
  };

  const confirmarEliminacion = () => {
    // Si el usuario confirma la eliminación, se procede a eliminar el proveedor.
    if(proveedorAEliminar){
      fetch("http://127.0.0.1:5174/proveedores/"+id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setUpdater(updater+1)
        setMensaje('Proveedor eliminado exitosamente');
      })
      
      //Despues de eliminar, se limpia el estado del formulario
      setProveedorAEliminar(null);
      setConfirmarEliminar(false);
    }
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
            <tr key={p._id}>
              <td>{p.nombre}</td>
              <td>{p.direccion}</td>
              <td>{p.correo}</td>
              <td>{p.telefono}</td> 
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleEditarProveedor(p)}>
                  Editar
                </button>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => handleEliminarProveedor(p._id)}>
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


// {confirmarEliminar && (
//   <div className="modal" style={{ display: 'block' }}>
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title">Confirmar Eliminación</h5>
//           <button
//             type="button"
//             className="close"
//             data-dismiss="modal"
//             onClick={cancelarEliminacion}
//           >
//             <span>&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">
//           ¿Estás seguro de que deseas eliminar este proveedor?
//         </div>
//         <div className="modal-footer">
//           <button
//             type="button"
//             className="btn btn-danger"
//             onClick={confirmarEliminacion}
//           >
//             Sí, eliminar
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             data-dismiss="modal"
//             onClick={cancelarEliminacion}
//           >
//             Cancelar
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}