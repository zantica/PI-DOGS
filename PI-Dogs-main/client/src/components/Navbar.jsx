import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar_container">
            <Link to='/create'>
                <input type="submit" value="Crear nuevo perro" />
            </Link>
            <SearchBar />
            <Sort />
        </div>
    )
}