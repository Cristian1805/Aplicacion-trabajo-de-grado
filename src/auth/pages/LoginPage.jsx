//HOOKS de la aplicacion
import React, { useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

import './LoginPage.css' 
import { url_prefi } from '../../config/api';




const loginFormFields = {
  loginEmail:    '',
  loginPassword: '',
}


export const LoginPage = () => {

  const navigate = useNavigate();

  const { startLogin, errorMessage } = useAuthStore();       
  const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm( loginFormFields );
  
  // const history = useHistory(); 

  const loginSubmit = async ( event ) => {
    event.preventDefault();

    // Verificar si ambos campos están vacíos
    if (!loginEmail.trim() && !loginPassword.trim()) {
      Swal.fire('Campos Vacíos', 'Por favor, ingrese su correo electrónico y contraseña.', 'warning');
      return;
    }


    try {
      const url = url_prefi + '/auth'; 
      
      const body = {
        email : loginEmail,
        password : loginPassword 
      }
      
      console.log(url);
      const response = await axios.post(url, body);
      
      // Almacenar datos en localStorage
      localStorage.setItem('jwt', response.data.token);
      navigate('/inicio',{ replace: true}); 
      console.log('Response:', response.data); 
      
    } catch (error) {
      console.error('Error:', error); 
    }

}; 

useEffect(() => {
  if ( errorMessage !== undefined ) {
    Swal.fire('Error en la autenticación', errorMessage, 'error');
  }
}, [errorMessage]) 

return (
  <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
      <div className="col-md-6 col-sm-12">
        <div className="mt-3 text-center">
          {/* Logo de la empresa */}
          <img
            // src={`${url_prefi}/assets/logo.jpg`}
            src="/src/public/1-logo.jpg"  
            alt="Logo de la Empresa"
            className="img-fluid mb-4"
          />
          <h3 className="form-title mb-4">Formulario Inicio de Sesión</h3>
          <div className="card p-4">
            <form onSubmit={loginSubmit}>
              <div className="form-group">
                <label htmlFor="usuario">Usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  id="usuario"
                  placeholder="Correo Electrónico"
                  name="loginEmail"
                  value={loginEmail}
                  onChange={onLoginInputChange}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="contrasena">Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  id="contrasena"
                  placeholder="Contraseña"
                  name="loginPassword"
                  value={loginPassword}
                  onChange={onLoginInputChange}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Iniciar Sesión
                </button>
              </div>

              <div className="form-group">
                <Link to="/register" className="btn btn-secondary btn-block">
                  Registro Usuario
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);


};
