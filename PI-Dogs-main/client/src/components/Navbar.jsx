import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import './Navbar.css'
import Sort from "./Sort";

export default function Navbar() {
    return (
        <div className="navbar_container">
            <h1 className="title">Doggyland</h1>
            <div className="button_create_container">
                <Link to='/create'>
                    <input type="submit" value="Crear nuevo perro" className="crear_nuevo"/>
                </Link>
            </div>
            <SearchBar />
            <Sort />
        </div>
    )
}