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
    // Redirige a una página de error 404 si no se encuentra el héroe.
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-md-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-fluid"
        />
      </div>

      <div className="col-md-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <div className="button-container">
          <button
            className="btn btn-outline-primary"
            onClick={onNavigateBack}
          >
            Regresar
          </button>
          
          <Link to="/salida-frm" className="btn btn-outline-success">
            Ir al Formulario de Salida
          </Link>
        </div>
      </div>
    </div>
  );
}
 