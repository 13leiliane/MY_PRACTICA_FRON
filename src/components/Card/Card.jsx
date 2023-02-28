import style from "./style/Card.module.css"
import { GrClose } from "react-icons/gr";
// importa el nombre del personaje con ele elemento NAVLINK o / LINK
import { NavLink } from "react-router-dom"
//

export default function Card(props) {
  console.log(props)
   return (
     <div className={style.card}>
       <h2 className={style.subtitle}><i>{ props.name }</i></h2>
<img className={style.cardImg} src={props.image} alt={props.name} />
       <div className={style.cardInfo}>
         <NavLink to={`/detail/${props.id}`}></NavLink>
         <div className={style.subtitle}>
         <h2>{props.species}</h2>
           <h2>{props.gender}</h2>
         </div>
         </div>
        <button
          className={style.button}
          onClick={() => props.onClose(props.id)}
        >
          <GrClose />
        </button>
      
         
      </div>
   );
}
