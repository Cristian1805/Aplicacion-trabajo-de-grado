import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './Navbar.css';

import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    useEffect(() => {
        console.log('Hola', localStorage.getItem('jwt'))
        if (!localStorage.getItem('jwt')) {
            navigate('/login', {
                replace: true
            });
        }
    }, [navigate]);

    const onLogout = () => {
        localStorage.removeItem('jwt');
        
        Swal.fire({
            title: 'Logout exitoso',
            text: 'Te has desconectado correctamente.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/login', {
                replace: true,
            });
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1">
            <Link className="navbar-brand" to="/">
                <img src="/src/assets/iconos/avatar.png" alt="Logo" width="25" height="25"/> Inicio
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                {/* Resto del código sin cambios... */}
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="navbar-brand">
                        Cristhian Lozano
                    </span>

                    <button
                        className="btn btn-outline-danger"
                        onClick={onLogout} 
                    >
                        Logout
                    </button> 
                </ul>
            </div>
        </nav> 
    );
};
