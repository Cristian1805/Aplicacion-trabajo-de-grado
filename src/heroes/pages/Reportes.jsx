import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { getHeroById } from '../helpers';



export const Reportes = () => {
  const [datos, setDatos] = useState([])
  useEffect(() => { 
  
    const url = 'http://localhost:5174' + '/inventario'; 
    axios.get(url)
    .then(response => {
      // Handle the successful response
      console.log(response.data);
      setDatos(response.data)
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error);
    }); 
   
  }, [])
  const getNombre = (id) => {
    return getHeroById(id)
  } 
  return (
    <div className="container mt-4">
      <h1 className='form-title-importadas' > REPORTES FRUTY FENIX</h1>
      <hr className='form-divider-importadas' />
      <div className='table-resposive'>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Calibre</th>
            <th>Cajas/Kgs</th>
          </tr>
        </thead> 
        <tbody>
        {datos.map(producto =>{ const hero = getNombre(producto.id_producto)
          return(<tr key={producto._id}>
            <td>{producto.id_producto}</td> 
            <td>{hero.superhero}</td> 
            <td>{producto.calibre}</td>
            <td>{producto.cantidad}</td>
          </tr>)
        })}
        </tbody>
      </table>
      </div>
    </div>
  );
};
