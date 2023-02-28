import style from "./style/LandingPag.module.css";
import { useNavigate } from "react-router-dom";
// aca es la presentacion de la aplicacion y lo importamos, solament el LINK y que valla  ala ruta LandingPag a  archivo NavBar
 const LandingPage = () => {
   const navigate = useNavigate();

  const backToHome = () => {
     navigate("/home");
  };
  return (
    <>
      <div className={style.detail}>
        <div className={style.cardInfo}>
          <h1>LEILIANE SILVA</h1>
          <div className={style.subtitle}>
            <div className={style.subtitle1}>
              <h2>Gender:</h2>
              <span>good</span>
              <h2>Specie:</h2>
              <span>Human</span>
              <h2>Origin:</h2>
              <span>Earth (Brasileña/vive Argentina)</span>
            </div>
            <div className={style.subtitle1}>
              <h2>Status:</h2>
              <span>Alive</span>
              <h2>Type:</h2>
              <span>Developer</span>
              <h2>Location:</h2>
              <span>Behind your screen</span>
            </div>
          </div>
        </div>
      </div>
      <button className={style.button} onClick={() => backToHome()}>
        Volver al home
      </button>
    </>
  );
};

export default LandingPage ;
