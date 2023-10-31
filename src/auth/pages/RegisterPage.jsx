import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'


const registerFormFields = { 
    registerName:      '',
    registerEmail:     '',
    registerPassword:  '',
    registerPassword2: '', 
  }

export const RegisterPage = () => { 

    const { startRegister } = useAuthStore
    const { registerEmail, registerName, registerPassword, registerPassword2, onInputChange:onRegisterInputChange } = useForm( registerFormFields );

    const registerSubmit = ( event ) => {
        event.preventDefault();
        if ( registerPassword !== registerPassword2 ) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
            return;
        }
      
        startRegister({ name: registerName, email: registerEmail, password: registerPassword });
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
              <h3 className="display-6">Bienvenido al inventario</h3>
            </div>
            {/* Columna para el formulario de inicio de sesión */}
              <div className="col-md-6 col-sm-12">
                <div className="mt-3 text-center">
                  <h3 className="display-6">Registrar usuario</h3>
                  <hr className="w-50 mx-auto mb-4" />
                </div>
                <form onSubmit={ registerSubmit }>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={ registerName }
                                onChange={ onRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
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
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="registerPassword2"
                                value={ registerPassword2 }
                                onChange={ onRegisterInputChange }
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
    
