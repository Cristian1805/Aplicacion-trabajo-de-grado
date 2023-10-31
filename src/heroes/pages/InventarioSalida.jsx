import { useMemo } from 'react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const InventarioSalida = () => {
  const { id } = useParams();
  
  const [fruitName, setFruitName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('pieces'); 
  const [calibre, setCalibre] = useState('100'); 

  const hero = useMemo(() => getHeroById(id), [id]);
  console.log(hero)
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      id_producto : id,
      calibre: calibre,
      cantidad: cantidad,
      unidad: unidad
    }
    // Aquí puedes agregar la lógica para registrar la salida de frutas en tu inventario
    console.log(`Se retiraron ${quantity} ${unit} de ${fruitName}`);
    // También puedes enviar esta información al servidor o almacenarla en una base de datos
    // Luego, puedes actualizar el estado y borrar los campos del formulario
    setFruitName('');
    setQuantity('');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto">
          <h1 className="display-4 text-center mt-5">SALIDA DE PRODUCTO</h1>
          <hr className="w-50 mx-auto mb-4" />
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="fruitName">Identificador de la Fruta:</label>
              <input
                type="text"
                id="fruitName"
                value={fruitName}
                onChange={(e) => setFruitName(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fruitName">Nombre de la Fruta:</label>
              <input
                type="text"
                id="fruitName"
                value={fruitName}
                onChange={(e) => setFruitName(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="calibre">Calibre:</label>
              <select
                id="calibre"
                value={calibre}
                onChange={(e) => setCalibre(e.target.value)}
                className="form-control"
              >
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
                <option value="pieces">Unidad</option>
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
