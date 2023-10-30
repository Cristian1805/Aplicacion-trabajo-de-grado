import React, { useState } from 'react';
import './styles.css/ProductoForm.css'

export const ProductoForm = () => {
  const [fruitName, setFruitName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('pieces');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Se retiraron ${quantity} ${unit} de ${fruitName}`);
    setFruitName('');
    setQuantity('');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto">
        <h1 id="my-title">ENTRADA DE PRODUCTO</h1>
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
                id="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
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
                <option value="pieces">Unidad</option>
                <option value="kilograms">Kilogramos</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Registrar Entrada Producto 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
