
import './LoginPage.css';

export const LoginPage = () => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
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

// export const LoginPage = () => {

//   const navigate = useNavigate();

//   const onLogin = () => {
//     navigate('/', {
//       replace: true
//     });
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className='text-center mb-4'>Inicio de sesion</h2>
//         <Form onSubmit={handleLogin}>
//           <Form.Group controlId="email">
//             <Form.Label>Correo Electrónico</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Ingresa tu correo electrónico"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//           </Form.Group>
//         </Form>
//        <hr />

//       <button 
//         className="btn btn-primary"
//         onClick={ onLogin }
//       >
//         Login
//       </button>

//     </div>
//   )
// }
