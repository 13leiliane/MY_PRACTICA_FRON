
import styles from "./style/NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import  {NavLink, useLocation } from "react-router-dom"

const  NavBar=(props) => {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <NavLink to={"/home"}></NavLink>

      <div className={styles.buttons}>
        <SearchBar onSearch={props.onSearch} />
        <div>
          <NavLink to={"/home"}>
            <button
              className={
                location.pathname === "/home" ? styles.active : styles.button
              }
            >
              Home
            </button>
          </NavLink>
          <NavLink to={"/about"}>
            <button
              className={
                location.pathname === "/about" ? styles.active : styles.button
              }
            >
              About
            </button>
          </NavLink>
          <NavLink to={"/favorites"}>
            <button
              className={
                location.pathname === "/favorites"
                  ? styles.active
                  : styles.button
              }
            >
              Favorites
            </button>
          </NavLink>
          <button onClick={() => props.logout()} className={styles.button}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
