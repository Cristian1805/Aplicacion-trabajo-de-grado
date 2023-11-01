import { useMemo } from 'react';
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    // Redirige a una página de error 404 si no se encuentra la fruta.
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-md-4">
        <img
          src={`/assets/frutas/${id}.jpg`} 
          alt={hero.superhero}
          className="img-fluid"
        />
      </div>

      <div className="col-md-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Tipo de fruta:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
        </ul>


      <h1 className="display-4 text-center mt-5">OPCIONES</h1>
      <hr className="w-50 mx-auto mb-4" />

      <div className="form-group">
        <button
          className="btn btn-outline-primary mr-2"
          onClick={onNavigateBack}
        >
          Regresar
        </button> 
      </div>

      <div className='form-group'>
        <Link to= {`/salida-frm/${id}`} className="btn btn-outline-success ml-2"> 

          Ir al Formulario de Salida
        </Link>
      </div>

      <div className='form-group'>
        <Link to="productos" className="btn btn-outline-secondary ml-2"> 

          Registrar entrada de producto
        </Link>
      </div>
      

      </div>
    </div>
  );
}
 