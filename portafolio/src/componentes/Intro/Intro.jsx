
import './Intro.css'; 
import gojo from '../img/gojo.png'; 
const Intro = () => {
  return (
    <div className="card1">
      <div className="content">
        <div className="texto">
          <h1>Hey, soy Aliza Vicente</h1>
          <p>
            1 año de experiencia. <span className="amarillo">Estudiante de Ingeniería Informatica</span> y 
            <span className="amarillo"> futura desarrolladora Frontend</span> dedicada a aprender programacion web 
            y desarrollar aplicaciones inspiradoras.
          </p>
          <div className="localizacion">
            <span>📍 Cochabamba, Bolivia</span>
            <span className="estado">
              <span className="subEstado"></span> Disponible para trabajar
            </span>
          </div>
        </div>
        <div className="imagen">
          <img src={gojo} alt="Avatar" className="gojo" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
