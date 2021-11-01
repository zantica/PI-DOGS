import React from "react";
import './Create.css'

export default function Create() {
        return (
            <div className="create">
                <div className="create_container">
                    <h2>Ingrese los datos para crear una nueva Raza</h2>
                    <form action="">
                    <span>Nombre</span> <input type="text" /> <br />
                    <span>Altura minima</span> <input type="text" /> <br />
                    <span>Altura maxima</span> <input type="text" />    <br />
                    <span>Peso minimo</span> <input type="text" />  <br />
                    <span>Peso maximo</span> <input type="text" />  <br />
                    <span>Espectativa de vida</span> <input type="text" />  <br />
                    <span>Temperamentos</span> <input type="text" />    <br />
                    <input type="submit" value="Crear" />
                    </form>
                </div>
            </div>
        )
}