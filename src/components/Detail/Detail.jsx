import styles from "../Detail/style/Detail.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
  const [dog, setDog] = useState({
    name: "",
     breed_group: "",
    life_span: "",
    origin: {},
    location: {},
    image: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //https://api.thedogapi.com/v1/breeds/${id}
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
      .then((response) => response.json())
      .then((doge) => {
        if (doge.name) {
          setDog(doge);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setDog({
       name: "",
     breed_group: "",
    life_span: "",
    origin: {},
    location: {},
    image: "",
    });
  }, [id]);

  const backToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className={styles.detail}>
        <img
          src={dog.image}
          alt={dog.name}
          className={styles.image}
        />
        <div className={styles.cardInfo}>
          <h1>{dog.name}</h1>
          <div className={styles.subtitle}>
            <div className={styles.subtitle1}>
              <h2> Breed_Group:</h2>
              <span>{dog.breed_group}</span>
              <h2>Life_Span:</h2>
              <span>{dog.life_span}</span>
              <h2>Origin:</h2>
              <span>{dog.origin.name}</span>
            </div>
            <div className={styles.subtitle1}>
              <h2>Status:</h2>
              <span>{dog.status}</span>
              <h2>Temperament:</h2>
              <span>{dog.temperamenmt ? dog.temperamenmt : "Uknown"}</span>
              <h2>Location:</h2>
              <span>{dog.location.name}</span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={() => backToHome()}>
        Volver al home
      </button>
    </>
  );
};

export default Detail;

//
//  return (
//     <div> {character ? <div>
//       <h1>{character.name}</h1>
//       <h5>{character.status}</h5>
//       <h5>{character.specie}</h5>
//       <h5>{character.gender}</h5>
//       <h5>{character.origin}</h5>
//     </div> : ""} </div>
//   );
// }
