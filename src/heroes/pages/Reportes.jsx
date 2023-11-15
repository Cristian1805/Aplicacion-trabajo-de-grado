import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getHeroById } from '../helpers';
import jsPDF from 'jspdf';

export const Reportes = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:5174' + '/inventario';
    const headers = {
        
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json', // Asegúrate de configurar el tipo de contenido adecuado
      },
    }

    axios.get(url, headers) 
      .then(response => {
        console.log(response.data);
        setDatos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const getNombre = (id) => { 
    return getHeroById(id);
  };

  const sortByDate = () => {
    const sortedDatos = [...datos].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    setDatos(sortedDatos);
  };

  const exportToPDF = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: '#miTabla' });
    pdf.save('reporte.pdf');
  };

  return (
    <div className="container mt-4">
      <h1 className='form-title-importadas'> REPORTES FRUTY FENIX</h1>
      <hr className='form-divider-importadas' />
      <button className="btn btn-primary mb-2" onClick={sortByDate}>Ordenar por Fecha</button>
      <button className="btn btn-success mb-2 ml-2" onClick={exportToPDF}>Exportar a PDF</button>
      <div className='table-responsive'>
        <table id="miTabla" className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Calibre</th>
              <th>Cajas/Kgs</th>
            </tr>
          </thead>
          <tbody>
            {datos.map(producto => {
              const hero = getNombre(producto.id_producto);
              return (<tr key={producto._id}>
                <td>{producto.id_producto}</td>
                <td>{hero.superhero}</td>
                <td>{producto.calibre}</td>
                <td>{producto.cantidad}</td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
