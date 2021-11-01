import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../store/actions'
import Paginado from './Paginado'
import Dog from './Dog';
import './Home.css'

export default function Dogs () {

    let dogs = useSelector((state) => state.dogs)
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ dogsPerPage ] = useState(8);
    const indexLastDog = currentPage * dogsPerPage;
    const indexFirstDog = indexLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexFirstDog, indexLastDog);
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch]);

    return (
        <div className="home_container">
            <Paginado 
            dogsPerPage= {dogsPerPage}
            dogs= {dogs.length}
            paginado = {paginado} />
        <div className="dog_card_container">
                {currentDogs.map((dog) => {
                    return <Dog 
                    key={dog.name}
                    name={dog.name} 
                    image={dog.image} 
                    weight_min={dog.weight_min} 
                    weight_max={dog.weight_max} 
                    temperament={dog.temperament} />
                })}
            </div> 
        </div>
    ) 
}