import React, { useState } from "react";
import styles from "./style/SearchBar.module.css";


import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [charcater, setCharacter] = useState("");
  const handleChange = (evento) => {
    setCharacter(evento.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        type="search"
        value={charcater}
        onChange={handleChange}
      />

      <button className={styles.button} onClick={() => onSearch(charcater)}>
        <IoSearchSharp />
      </button>
    </div>
  );
}