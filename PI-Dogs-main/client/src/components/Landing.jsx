import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function Landing () {
    return (
        <div>
            <img src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg" alt="landing_img" className="landing_img" />
            <div className="button_container">
                <Link to='/home'>
                    <input type="submit" value='Entrar' className="landing_button" />
                </Link>
            </div>
        </div>
    )
}