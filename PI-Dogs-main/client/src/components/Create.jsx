import React, { useState, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';
import { postDog, getTemperaments } from '../store/actions/index';
import { useDispatch, useSelector } from "react-redux";
import './Create.css'

export default function Create() {
    const dispatch = useDispatch();
    const history = useHistory()
    const temperaments = useSelector(state => state.temperaments);
    const [ newDog, setNewDog ] = useState({
        image: "",
        name: "",
        weight_min: "",
        weight_max: "",
        height_min: "",
        height_max: "",
        life_span: "",
        temperament:[]
    })
    
    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    function handleChange(e) {
        setNewDog({
            ...newDog,
            [e.target.name] : e.target.value
        })
    };

    function handleSelect(e) {
        setNewDog({
            ...newDog,
            temperament: [...newDog.temperament, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postDog(newDog));
        alert('Nueva raza creada!');
        setNewDog({
            image: "",
            name: "",
            weight_min: "",
            weight_max: "",
            height_min: "",
            height_max: "",
            life_span: "",
            temperament:[]
        })
        history.push('/home')
    }


        return (
            <div className="create">
                <div className="create_container">
                    <h2>Ingrese los datos para crear una nueva Raza</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Imagen</label>
                            <input 
                            type="text" 
                            value={newDog.image} 
                            name="image" 
                            onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Nombre</label> 
                            <input 
                            type="text" 
                            value={newDog.name} 
                            name="name" 
                            onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Altura minima</label> 
                            <input 
                            type="text" 
                            value={newDog.height_min} 
                            name="height_min" 
                            onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Altura maxima</label> 
                            <input 
                            type="text" 
                            value={newDog.height_max} 
                            name="height_max" 
                            onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Peso minimo</label> 
                            <input 
                            type="text" 
                            value={newDog.weight_min} 
                            name="weight_min" 
                            onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Peso maximo</label> 
                            <input 
                            type="text" 
                            value={newDog.weight_max} 
                            name="weight_max" 
                            onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Espectativa de vida</label> 
                            <input 
                            type="text" 
                            value={newDog.life_span} 
                            name="life_span" 
                            onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Temperamentos</label>
                            <select onChange={handleSelect}>
                                {temperaments.map((temps) => {
                                    return <option 
                                    value={temps.name} 
                                    key={temps.name}>{temps.name}</option>
                                })}
                            </select>
                        </div>
                        <ul className='create_temps'>
                            <li className="temps_container">{newDog.temperament.map(it => it + ', ')}</li>
                        </ul>
                            <Link to='/home'><button>Inicio</button></Link>
                            <input type="submit" value="Crear"/>
                    </form>
                </div>
            </div>
        )
}