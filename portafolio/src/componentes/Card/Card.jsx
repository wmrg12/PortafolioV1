import { useState } from "react";
import './Card.css'
import Intro from "../Intro/Intro";
import Experience from "../Experience/Experience";
import Stacks from "../Stacks/Stacks";
import Estudio from "../Estudios/Estudio";
export const Card = () => {
  
   const [active, setActive] = useState(0);
   const handChange = () =>{
   if(active === 0){
    setActive(1)
   }else{
    setActive(2)
   }
   }
 return (
    <div>
    {active === 0 &&(
        <section>
        <Intro></Intro>
         </section>
    )}
    { active === 1 &&(
        <section>
        <Estudio></Estudio>
        <Experience></Experience>
      
        </section>
    )}
     { active === 2 &&(
        <section>
         <Stacks></Stacks>
        </section>
    )}

      <button 
      onClick={handChange}
      className = {'boton'}> Siguiente </button>
</div>

)
};