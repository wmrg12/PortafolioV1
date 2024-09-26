import "./Stacks.css";
import asm from '../img/asm.png';
import css from '../img/css.png';
import html from '../img/html.png';
import java from '../img/java.png';
import python from '../img/python.png';
import vite from '../img/vite.png';
import react from '../img/react.png';

const techStack = [
    { id: 1, image: html, label: 'HTML5' },
    { id: 2, image: css, label: 'CSS3' },
    { id: 3, image: java, label: 'Java' },
    { id: 4, image: react, label: 'React' },
    { id: 5, image: vite, label: 'Vite' },
    { id: 6, image: python, label: 'Python' },
    { id: 7, image: asm, label: 'ASM' },
  ];
  
  const Stack = () => {
    return (
      <div className="stack">
        <h1>Conociminento</h1>
        <div className="stack1">
          {techStack.map((tech) => (
            <div key={tech.id} className="card">
              <img src={tech.image} alt={tech.label} className="icono" />
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Stack;