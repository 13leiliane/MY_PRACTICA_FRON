import React, { useState } from "react";
import style from "./style/SearchBar.module.css";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [dog, setDog] = useState("");
  //
  // Onclick -- es cada vez que el usuario haga un click 
  //
  // OnChange-- es para cada vez que el usuario ingreasar un dato. en el INPUT coo tal va a cptutrar por medio un un evento  
  const handleChange = (evento) => {
    // esto si va aencarga de CAPITURAR lo que esciba el usuario  POR ESO NECESITO SETEAR EL ESTADO CON SETDOG.
    setDog(evento.target.value);
  };
  return (
    <div className={style.searchBar}>
      <input
        className={style.input}
        type="search"
        value={dog}
        onChange={handleChange}
      />

      <button className={style.button} onClick={() => onSearch(dog)}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

// className={styles.button}
// import { IoSearchSharp } from "react-icons/io5";
// import styles from "./style/SearchBar.module.css";

// export default function SearchBar({ onSearch }) {
//   // const handleOnSearch = () =>
//   //   onSearch(document.getElementById("search-bar-input").value);

//   const handleOnSearch = () => {
//     onSearch(document.getElementById("searchInput").value);
//   };

//   return (
//     <div className={styles.searchBar}>
//       <input
//         className={styles.input}
//         id="searchInput"
//         placeholder="Agregar Personaje"
//       />
//       <button className={styles.button} onClick={handleOnSearch}>
//         <IoSearchSharp />
//       </button>
//     </div>
//   );
// }
