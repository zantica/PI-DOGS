import React from "react";
import './Detail.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../store/actions";
import { useEffect } from "react";


export default function Detail({props}) {
    console.log(props)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch, props.match.params.id])

    const myDog = useSelector((state) => state.detail)
    console.log(myDog)

    return (
        <div className="details">
                {
                    myDog.length > 0 ? 
                <div className="details_container">
                    <h1>{myDog[0].name}</h1>
                    <img src={myDog[0].img? myDog[0].img : myDog[0].img} alt="" />
                    <h4>Peso minimo: {myDog[0].weight_min}kg</h4>
                    <h4>Peso maximo: {myDog[0].weight_max}kg</h4>
                    <h4>Altura minima: {myDog[0].height_min}</h4>
                    <h4>Altura maxima: {myDog[0].height_max}</h4>
                    <h4>Años de vida: {myDog[0].life_span}</h4>
                    <h4>Temperamentos: {!myDog[0].createInDb? myDog[0].temperament + ' ' : myDog[0].temperaments.map(t => t.name + (' '))}</h4>

                </div> : <p>Cargando...</p>

                }
        <Link to='/home'>
            <button>Inicio</button>
        </Link>
        </div>

    )
};