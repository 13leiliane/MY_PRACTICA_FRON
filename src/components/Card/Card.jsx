export default function Card(props) {
  console.log(props)
   return (
      <div>
          <button onClick={props.onClose}>X</button>
       <h2>{ props.name}</h2>
         <h2>{props.breed_group}</h2>
       <h2>{ props.life_span}</h2>
         <img  src={props.image} alt={props.name} /> 
      </div>
   );
}
