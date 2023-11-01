// Importa dotenv

import { useMemo } from 'react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

import './styles.css/InventarioSalida.css' 


// import dotenv from 'dotenv';
// dotenv.config(); 

import axios from 'axios';
// import { getEnvVariables } from '../helpers/index'

export const ProductoForm = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);


  const [idProducto, setIdProducto] = useState('');
  const [fruitName, setFruitName] = useState('');
  const [calibre, setCalibre] = useState('Sin Calibre');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Cajas');

  const handleFormSubmit = async (e) => {
    e.preventDefault();


    // Logica del inventario de frutas  
    
    try {
      const url = 'http://localhost:5174' + '/inventario'; 
      
      const body = {
        id_producto : id,
        calibre: calibre,
        cantidad: quantity,
        unidad: unit
      }
      
      console.log(url);
      const response = await axios.post(url, body);
      console.log('Response:', response.data);
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
          <h1 id="my-title">ENTRADA DE MERCANCIA AL INVENTARIO</h1>
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
                onChange={(e) => setQuantity(e.target.value)}
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
              Registrar Entrada
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};