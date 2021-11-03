import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import './Navbar.css'
import Sort from "./Sort";

export default function Navbar() {
    return (
        <div className="navbar_container">
            <h1>Doggyland</h1>
            <Link to='/create'>
                <input type="submit" value="Crear nuevo perro" />
            </Link>
            <SearchBar />
            <Sort />
        </div>
    )
}