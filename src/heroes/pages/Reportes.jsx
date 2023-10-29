import React from 'react';

export const Reportes = () => {
  return (
    <div className="container mt-4">
      <h1 className='display-4 text-center mt-5' > REPORTES FRUTY FENIX</h1>
      <hr className='w-50 mx-auto mb-3' />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Calibre</th>
            <th>Cajas/Kgs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Manzana</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Banano</td>
            <td>S.C</td>
            <td>50</td>
          </tr>
          {/* Agrega más filas para tus datos aquí */}
        </tbody>
      </table>
    </div>
  );
};
