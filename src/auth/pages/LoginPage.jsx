import React from 'react';

export const LoginPage = () => {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        {/* Columna para el logo de la empresa */}
        <div className="col-md-6 col-sm-12 text-center">
          <img
            src="/assets/logo.jpg"
            alt="Logo de la Empresa"
            className="img-fluid mb-4"
          />
          <h3 className="display-6">Bienvenido al inventario</h3>
        </div>
        {/* Columna para el formulario de inicio de sesión */}
        <div className="col-md-6 col-sm-12">
          <div className="mt-3 text-center">
            <h3 className="display-6">Formulario Inicio de sesión</h3>
            <hr className="w-50 mx-auto mb-4" />
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="usuario">Usuario:</label>
              <input
                type="text"
                className="form-control"
                id="usuario"
                placeholder="Nombre de usuario"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="contrasena">Contraseña:</label>
              <input
                type="password"
                className="form-control"
                id="contrasena"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
