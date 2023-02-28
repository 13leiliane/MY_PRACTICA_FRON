
import { Route, Routes, useNavigate
} from 'react-router-dom';
 import Cards from './components/Cards/Cards'
import NavBar from './components/Navbar/NavBar';
import style from "./App.module.css"
import { useState, useEffect } from "react"
import LandingPage from './components/LandingPag/LandingPag';
import Detail from './components/Detail/Detail';
//import { fetch } from "node-fetch"

function App() {
  // 1°un stato para el array de los personajes 
  const [characters, setcharacters] = useState([]);
  //
  //  const navigate = useNavigate();
  // //
  // const [access, setAccess] = useState(false);
  //

  //2° function para agregar personajes
//   const onSearch = () => {
//   const example = {
//  name: 'Yorkshire Terrier',
//     breed_group: "Toy",
//     life_span: "12 - 16 years",
//     image: 'https://cdn2.thecharacterapi.com/images/B12BnxcVQ.jpg'
//     };
//     // setear characters e passar example.. seria el setcharacters trajendo mi la copia de lo que hay en characterS Y EXAMPLE. Example sera la copia de mi estado. objecto, function
//     setcharacters([...characters, example])
// } // AHORA VSMOS USAR EL METODO FETC
//
//
   const onSearch = (character) => {
    //https://api.thecharacterapi.com/v1/breeds/
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      // aca el mensajero ya me devuelve la respuesta
      .then((data) => {
        console.log(data)
        if (data.id) {
          if (characters.some((charactere) => charactere.id === data.id)) {
            window.alert("Ya agregaste a ese personaje!");
          } else {
            setcharacters((oldcharacteres) => [...oldcharacteres, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
//
//
//
   const onClose = (id) => {
    setcharacters((characters) => characters.filter((charactere) => charactere.id !== id));
  };
  //
  // useEffect(() => {
  //   !access && navigate("/");
  // }, [access]);
//
  return (
    <>
    <div className={style.app}>
    <div className={style.img}>
          <div>
            <NavBar
              onSearch={onSearch}
            />
            <Routes>
               <Route
                path="/home"
                element={<Cards characters={characters} onClose={onClose} />}
              />
              <Route path="/landingpag" element={<LandingPage />} />
              <Route path="/detail/:detailId" element={<Detail />} />
              
           </Routes>
       
    </div>
    </div>
    </div>
    </>
  )
}

export default App;
