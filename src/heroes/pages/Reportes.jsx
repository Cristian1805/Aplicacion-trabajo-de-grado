import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getHeroById } from '../helpers';
import { Table, Button, Pagination } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap 

import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import { url_prefi } from '../../config/api';

// Configurando release para los reportes
export const Reportes = () => {
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(7); // Número de productos por página 

  useEffect(() => {
    const url = url_prefi + '/inventario'; 
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
    const date = new Date();
    pdf.text(date.toString(), 10, 10);
    
    const tableData = currentProducts.map((producto) => {
      const hero = getNombre(producto.id_producto);
      return [producto.id_producto, hero.superhero, producto.calibre, producto.cantidad];
    });
  
    pdf.autoTable({
      head: [['ID', 'Nombre', 'Calibre', 'Cajas/Kgs']],
      body: tableData,
    });
  
    pdf.save('reporte.pdf'); 
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = datos.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h1 className='form-title-importadas'> REPORTES FRUTY FENIX</h1>
      <hr className='form-divider-importadas' />
      
      <div className="mb-2">
        <button className="btn btn-primary" onClick={sortByDate}>
          Ordenar por Fecha
        </button>
      </div>

      <div className="mb-2 ml-2">
        <button className="btn btn-success" onClick={exportToPDF}>
          Exportar a PDF
        </button>
      </div>
      
      <div className='table-responsive'>
        <Table striped bordered>
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Calibre</th>
              <th>Cajas/Kgs</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((producto) => {
              const hero = getNombre(producto.id_producto); 
              return (
                <tr key={producto._id}>
                  <td>{producto.id_producto}</td>
                  <td>{hero.superhero}</td>
                  <td>{producto.calibre}</td>
                  <td>{producto.cantidad}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination>
          {[...Array(Math.ceil(datos.length / productsPerPage)).keys()].map((number) => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};