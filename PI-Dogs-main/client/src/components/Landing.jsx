import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function Landing () {
    return (
        <div className="landing_container">
            <div className="blur">
                <h1>Bienvenidos a Doggyland</h1>
                <Link to='/home'>
                    <input type="submit" value='Entrar' className="landing_button" />
                </Link>
            </div>
        </div>
    )
}