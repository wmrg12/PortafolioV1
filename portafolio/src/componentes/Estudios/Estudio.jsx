import './Estudio.css';
import umss from '../img/umss.png';

const Estudio = () => {
  return (
    <div className="card1">
      <h1>Estudios</h1>
      <div className="estudio1">
        <img src={umss} alt="umss" className="logo" />
        <div className="info">
          <h3 className="universidad">Universidad Mayor de San Simon</h3>
          <p className="carrera">Ingeniería Informatica</p>
          <p className="actualidad">Septiembre 2024 - Actualidad</p>
          <p className="educacion">
            Actualmente cursando el 4° semestre de la carrera de Ingeniería de Informatica en la Universidad Mayor de San Simon.
            Enfocado en el desarrollo de software. Activo en la comunidad universitaria y participante en proyectos de investigación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Estudio;
