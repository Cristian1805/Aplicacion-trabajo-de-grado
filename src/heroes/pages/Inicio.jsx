import React from 'react';
import { Carousel } from 'react-bootstrap';

const Inicio = () => {
  return (
    <div>
      <Carousel>
        {/* Primera diapositiva */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/frutas/fruta1.jpg"
            alt="Primera fruta"
          />
          <Carousel.Caption>
            <h3>Bienvenido al Inventario Fruty Fenix</h3>
            {/* <p>Descubre la frescura de nuestras frutas.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        {/* Segunda diapositiva */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/frutas/fruta2.jpg"
            alt="Segunda fruta"
          />
          <Carousel.Caption>
            <h3>Bienvenido al Inventario Fruty Fenix</h3>
            <p>Variedad y calidad en cada producto.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Tercera diapositiva */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/frutas/fruta3.jpg"
            alt="Tercera fruta"
          />
          <Carousel.Caption>
            <h3>Bienvenido al Inventario Fruty Fenix</h3>
            <p>Explora nuestras opciones frescas y deliciosas.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Inicio;
