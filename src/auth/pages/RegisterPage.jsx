
// import { Link, useNavigate} from 'react-router-dom';
import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';



const registerFormFields = { 
    registerName:      '',
    registerEmail:     '',
    registerPassword:  '',
    registerPassword2: '', 
  } 

export const RegisterPage = () => { 

    // const { startRegister } = useAuthStore 
    const { registerEmail, registerName, registerPassword, registerPassword2, onInputChange:onRegisterInputChange } = useForm( registerFormFields );

    const registerSubmit = async ( event ) => {
        event.preventDefault();
        if ( registerPassword !== registerPassword2 ) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
            return;
        }
      
        // startRegister({ name: registerName, email: registerEmail, password: registerPassword });
        console.log(registerName, registerEmail, registerPassword)
        
        try {
          const url = 'http://localhost:5174/auth/new'; 
          
          const body = {
            name : registerName,
            email : registerEmail,
            password : registerPassword
          }
          
          console.log(url);
          const response = await axios.post(url, body);
          console.log('Response:', response.data); 
          
        } catch (error) {
          console.error('Error:', error);
        }
      }

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
              {/* <h3 className="display-6">Bienvenido al inventario</h3> */}
            </div>
            {/* Columna para el formulario de inicio de sesión */}
              <div className="col-md-6 col-sm-12">
                <div className="mt-3 text-center">
                  <h3 className="display-6">Registrar usuario</h3>
                  <hr className="w-50 mx-auto mb-4" />
                </div>
                <form onSubmit={ registerSubmit }>
                  <div className="form-group">
                    <label htmlFor="usuario">Nombre Completo:</label>
                      <input
                        type="text"
                        className="form-control"
                        id='newusuario'
                        placeholder="Nombre"
                        name="registerName"
                        value={ registerName }
                        onChange={ onRegisterInputChange }
                      />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="contrasena">Correo Electronico:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={ registerEmail }
                                onChange={ onRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                          <label htmlFor="contrasena">Contraseña:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="registerPassword"
                                value={ registerPassword }
                                onChange={ onRegisterInputChange }
                            />
                        </div>

                        <div className="form-group mb-2">
                          <label htmlFor="rep-contrasena">Repetir Contraseña:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="registerPassword2"
                                value={ registerPassword2 }
                                onChange={ onRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          Crear Cuenta
                        </button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
    
