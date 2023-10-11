import React, { useState } from 'react';

const FruitInventoryOut = () => {
  const [fruitName, setFruitName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('pieces');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para registrar la salida de frutas en tu inventario
    console.log(`Se retiraron ${quantity} ${unit} de ${fruitName}`);
    // También puedes enviar esta información al servidor o almacenarla en una base de datos
    // Luego, puedes actualizar el estado y borrar los campos del formulario
    setFruitName('');
    setQuantity(''); 
  };

  return (
    <div>
      <h2>Registro de Salida de Frutas</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="fruitName">Nombre de la Fruta:</label>
          <input
            type="text"
            id="fruitName"
            value={fruitName}
            onChange={(e) => setFruitName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="unit">Unidad:</label>
          <select
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="pieces">Piezas</option>
            <option value="kilograms">Kilogramos</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Salida
        </button>
      </form>
    </div>
  );
};

export default FruitInventoryOut;
