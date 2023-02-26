export default function SearchBar(props) {
  // las propriedad son objectos 
  const { onSearch } = props 
   return (
     <div>
       {/*vamos a llamar en el onclick ACA EL PAPA DE SearchBar es EL HOME. 
       Las props son tipo de datos objectos  */}
         <input type='search' />
      <button onClick={() => onSearch("PUEDE SER EL FUTURO ID")}>Agregar</button>
      </div>
   );
}
