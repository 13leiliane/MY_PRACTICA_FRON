
import { Route, Routes, useNavigate, useLocation
} from 'react-router-dom';
 import Cards from './components/Cards/Cards'
import NavBar from './components/Navbar/NavBar';
import Form from './components/Form/Form';
import styles from "./App.module.css"
import { useState, useEffect } from "react"
import LandingPage from './components/LandingPag/LandingPag';
import Detail from './components/Detail/Detail';



function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "exemple@gmail.com";
  const password = "ae1234";

  if (useLocation().pathname === "/") {
    document.body.classList.add("bodyBlack");
  } else {
    document.body.classList.remove("bodyBlack");
  }

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("El usuario o la contraseña es incorrecta");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };
  const onSearch = (character) => {
    //https://api.thedogapi.com/v1/breeds/
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          if (characters.some((char) => char.id === data.id)) {
            window.alert("Ya agregaste a ese personaje!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
  const onClose = (id) => {
    setCharacters((characters) => characters.filter((char) => char.id !== id));
  };

  /* eslint-disable */
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  /* eslint-disable */

  return (
    <div className={styles.app}>
      <div className={styles.img}>
        <div className={styles.container}>
          <div className={styles.favorites}>
            <div>
              <div>
                {location.pathname !== "/" && (
                  <NavBar onSearch={onSearch} logout={logout} />
                )}
              </div>
            </div>
            <Routes>
              <Route exact path="/" element={<Form login={login} />} />
              <Route
                path="/home"
                element={<Cards characters={characters} onClose={onClose} />}
              />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/landingPage" element={< LandingPage />} />
              {/* <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;