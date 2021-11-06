import React from "react";
import './Detail.css';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../store/actions";
import { useEffect } from "react";


export default function Detail() {

    let dispatch = useDispatch();

    const { id } = useParams()
    
    useEffect(() => {
        dispatch(getDetail(id))
    },[dispatch, id])


    
    const myDog = useSelector((state) => state.detail)
    console.log(myDog)

    return (
        <div className="details">
                {
                    myDog.length > 0 ? 
                <div className="details_container">
                    <h1>{myDog[0].name}</h1>
                    <img src={myDog[0].image? myDog[0].image : myDog[0].img} alt="dog_image" className="dog_image" />
                    <h4>Peso maximo: {myDog[0].weight_max}kg</h4>
                    <h4>Peso minimo: {myDog[0].weight_min}kg</h4>
                    <h4>Altura maxima: {myDog[0].height_max}cm</h4>
                    <h4>Altura minima: {myDog[0].height_min}cm</h4>
                    <h4>Años de vida: {myDog[0].life_span}</h4>
                    <h4>Temperamentos: {!myDog[0].createdInDB? myDog[0].temperament + ' ' : myDog[0].temperaments.map(t => t.name + (' '))}</h4>

                    <Link to='/home'>
                        <button className="inicio">Inicio</button>
                    </Link>
                </div> : <p>Cargando...</p>

                }
        </div>

    )
};