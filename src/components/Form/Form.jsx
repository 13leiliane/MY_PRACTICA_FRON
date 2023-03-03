import React from "react";
import { useState } from "react";
import { Validation } from "../Validation/Validation";
import styles from "./style/Form.module.css";
import logeo from "../../assets/logeo.jpg";


export default function Form(props) {
  // 
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
//
 
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  // 
  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    //
    setErrors(Validation({ ...userData, [e.target.name]: e.target.value }));
  }
//
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

 return (
    <div className={styles.container}>
      <img src={logeo} alt="logeo" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          placeholder="Ingrese el usuario..."
          type="text"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p className={`${styles.errormail} ${styles.error}`}>
          {errors.username}
        </p>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={`${styles.errorpass} ${styles.error}`}>
          {errors.password}
        </p>
        <button
          type="submit"
          className={
            !Object.values(errors).length
              ? styles.button
              : styles.buttonDisabled
          }
        >
          Login
        </button>
        <br />
        <br />
        <br />
        <br />
        <h1>
          {" "}
          ¡BIENVENIDOS! <br /> <br />A Rick AND Morty..
        </h1>
      </form>
    </div>
  );
}