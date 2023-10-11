import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                MENU PRINCIPAL
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        TROPICALES
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        IMPORTADAS
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        BUSCAR
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/productos"
                    >
                        PRODUCTO
                    </NavLink>

                    {/* <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/salida-frm"
                    >
                        SALIDA
                    </NavLink> */}

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/proveedores"
                    >
                        PROVEEDORES
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/reportes"
                    >
                        REPORTES
                    </NavLink>
                </div>
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
    )
}
