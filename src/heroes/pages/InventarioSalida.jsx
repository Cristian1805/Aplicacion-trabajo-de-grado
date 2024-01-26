// Importa dotenv

import { useMemo } from 'react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

import './styles.css/InventarioSalida.css'
import Swal from 'sweetalert2';



// import dotenv from 'dotenv';
// dotenv.config(); 

import axios from 'axios';
import { url_prefi } from '../../config/api';
// import { getEnvVariables } from '../helpers/index'

export const InventarioSalida = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  
  const fruitName = hero.superhero;
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Cajas'); 
  const [calibre, setCalibre] = useState('100');

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();


    // Logica del inventario de frutas  
    
    try {
      const url = url_prefi + '/inventario'; 
      
      const body = {
        id_producto : id,
        calibre: calibre,
        cantidad: -quantity,
        unidad: unit
      }

      const headers = {
        
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json', // Asegúrate de configurar el tipo de contenido adecuado
        },
      }

      // // Verificar que la cantidad a retirar no sea mayor a la cantidad actual en el inventario
      // const inventarioActual = await axios.get(url, headers); 
      // const cantidadActual = inventarioActual.data[0]?.cantidad || 0; // Obtener la cantidad actual o 0 si no hay datos
      // if (parseInt(quantity, 10) > cantidadActual) {
      //   Swal.fire({
      //     title: 'Error',
      //     text: 'La cantidad a retirar es mayor que la cantidad actual en el inventario',
      //     icon: 'error',
      //   });
      //   return; // Salir de la función si la cantidad es mayor
      // }

      console.log(url);
      const response = await axios.post(url, body, headers); 
      console.log('Response:', response.data);

      // Muestra la notificación exitosa
      Swal.fire({
        title: 'Salida Registrada',
        text: `Se retiraron ${quantity} ${unit} de ${fruitName}`,
        icon: 'success',
      });
    } catch (error) {
      console.error('Error:', error);
    }

  
    console.log(`Se retiraron ${quantity} ${unit} de ${fruitName}`);
    // También puedes enviar esta información al servidor o almacenarla en una base de datos
    // Luego, puedes actualizar el estado y borrar los campos del formulario
    setQuantity('');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto">
          <h1 id="my-title">SALIDA DE MERCANCIA</h1>
          <hr className="w-50 mx-auto mb-4" />
          <form onSubmit={handleFormSubmit}> 
            <div className="form-group">
              <label htmlFor="fruitName" className="label-fruit">Identificador de la Fruta:</label>
              <h1 className="h1-fruit">{id}</h1>
              
            </div>
            <div className="form-group">
            <label htmlFor="fruitName" className="label-fruta">
              Nombre de la Fruta:
            </label>
            <h1 className="titulo-fruta">{fruitName}</h1> 

            </div>
            <div className="form-group">
              <label htmlFor="calibre">Calibre:</label>
              <select
                id="calibre"
                value={calibre}
                onChange={(e) => setCalibre(e.target.value)}
                className="form-control"
              >
                <option value="Sin Calibre">Sin Calibre</option>
                <option value="100">100</option>
                <option value="113">113</option>
                <option value="125">125</option>
                <option value="150">150</option>
                <option value="175">175</option>
                <option value="198">198</option>
              </select>
            </div>

            <div className="form-group">
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => {
                const inputValue = e.target.value;
                // Validar que el valor sea un número positivo
                if (/^[+]?\d*$/.test(inputValue)) {
                  // Actualizar el estado solo si el valor es válido
                  setQuantity(inputValue);
                } 
              }} 
              required 
              className="form-control"
            />
            </div>
            <div className="form-group">
              <label htmlFor="unit">Unidad:</label>
              <select
                id="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="form-control"
              >
                <option value="Cajas">Unidad</option>
                <option value="kilograms">Kilogramos</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Registrar Salida
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InventarioSalida;
