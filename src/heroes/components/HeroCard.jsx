import { Link } from 'react-router-dom';
import './Herocard.css'

const CharactersByHero = ({ alter_ego, caracteristicas}) => {
    return ( alter_ego === caracteristicas )
     ? <></>
     : <p>{ caracteristicas }</p>;
}


export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,  
    caracteristicas ,
}) => {

    const heroImageUrl = `./frutas/${ id }.jpg`;  




    return (
        <div className="col animate__animated animate__fadeIn">
        <div className="card my-card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImageUrl} className="card-img my-image" alt={superhero} />
            </div>
            <div className="col-8">
              <div className="card-body my-card-body">
                <h5 className="card-title my-title">{superhero}</h5>
                <p className="card-text my-text">{alter_ego}</p>
                <CharactersByHero caracteristicas={caracteristicas} alter_ego={alter_ego} /> 
                <Link to={`/hero/${id}`} className="btn btn-outline-success my-link">
                  Ingresar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> 
      
    )
}
