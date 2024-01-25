import React from 'react';
import { Carousel } from 'react-bootstrap';


import './styles.css/Inicio.css' 

const Inicio = () => {
  return (
    <div>
      <Carousel className="carousel-container">
        {/* Primera diapositiva */}
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="./carrusel/4img.jpg"
            alt="Primera fruta"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Bienvenido al Inventario Fruty Fenix</h3>
            <p>Descubre la frescura de nuestras frutas.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Segunda diapositiva */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./carrusel/2img.jpg"
            alt="Segunda fruta"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Bienvenido al Inventario Fruty Fenix</h3>
            <p>Variedad y calidad en cada producto.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Tercera diapositiva */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./carrusel/3img.jpg"
            alt="Tercera fruta"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Bienvenido al Inventario Fruty Fenix</h3>
            <p>Explora nuestras opciones frescas y deliciosas.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Inicio;
