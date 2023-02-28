// QUE VAMOS HACER ACA. Ahora el padre de SEARCHBAR y tambien trajemos la proipriedad onsearchsera NavBar-- ahora Nav se encarga de renderizar a onSearch?
import style from "./style/NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import  {NavLink } from "react-router-dom"

export default function NavBar({onSearch}) {
  return ( 
    <div>
      <NavLink to={"/home"}>
              Home
          </NavLink>
     <NavLink to={"/landingPag"}>
              LandingPag
          </NavLink>
          {/* <br /> */}
     
      <SearchBar onSearch={ onSearch } />
    </div>
  )
}
