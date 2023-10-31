import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

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
    })
    .then((response) => response.json())
    .then((json) => {
      setProveedores(json);
    })
    .catch((error) => {
      console.error('Error al obtener la lista de proveedores:', error);
    });
}, [updater]);
    

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const crearProovedor = async () => { 
    try {
      await fetch("http://127.0.0.1:5174/proveedores", {
        method: "POST",
        body: JSON.stringify(proveedor),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then((response) => response.json()) 
        .then((json) => {
          console.log(json);
          if (json.success) {
            Swal.fire('¡Proveedor creado!', 'El proveedor se ha creado exitosamente.', 'success');
            setUpdater(updater + 1);
            setProveedor({ nombre: '', direccion: '', correo: '', telefono: '' });
          } else {
            Swal.fire('Error', 'Hubo un error al crear el proveedor. Inténtalo de nuevo.', 'error');
          }
        });
    } catch (error) {
      console.error('Error al enviar datos:', error);
      Swal.fire('Error', 'Hubo un error al crear el proveedor. Inténtalo de nuevo.', 'error');
    }
  };

  const actualizarProovedor = async () => {
    try {
      await fetch("http://127.0.0.1:5174/proveedores/" + editarProveedor._id, {
        method: "PUT",
        body: JSON.stringify(proveedor),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.success) {
            Swal.fire('¡Proveedor actualizado!', 'El proveedor se ha actualizado exitosamente.', 'success');
            setUpdater(updater + 1);
            setProveedor({ nombre: '', direccion: '', correo: '', telefono: '' });
            setEditarProveedor(null);
          } else {
            Swal.fire('Error', 'Hubo un error al actualizar el proveedor. Inténtalo de nuevo.', 'error');
          }
        });
    } catch (error) {
      console.error('Error al enviar datos:', error);
      Swal.fire('Error', 'Hubo un error al actualizar el proveedor. Inténtalo de nuevo.', 'error');
    }
  };
    

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

  const confirmarEliminacion = () => {
    // Si el usuario confirma la eliminación, se procede a eliminar el proveedor.
    if (proveedorAEliminar) {
      fetch(`http://127.0.0.1:5174/proveedores/${proveedorAEliminar}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            setUpdater(updater + 1);
            setMensaje('Proveedor eliminado exitosamente');
          } else {
            setMensaje('Hubo un error al eliminar el proveedor.');
          }
        })
        .catch((error) => {
          console.error('Error al eliminar el proveedor:', error);
          setMensaje('Hubo un error al eliminar el proveedor.');
        });

      // Después de eliminar, se limpia el estado del formulario
      setProveedorAEliminar(null);
      setConfirmarEliminar(false);
    }
  };
  
  // El siguiente Fragmento muestra la confirmación para eliminar el proveedor 
  const handleEliminarProveedor = (id) => {
    setProveedorAEliminar(id);
    setConfirmarEliminar(true);
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
      {confirmarEliminar && (
        <div className="modal">
          <div className="modal-content">
            <h2>¿Estás seguro de que deseas eliminar este proveedor?</h2>
            <button className="btn btn-danger" onClick={confirmarEliminacion}>
              Sí, eliminar
            </button>
            <button className="btn btn-primary" onClick={() => setConfirmarEliminar(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div> 
  );
}; 