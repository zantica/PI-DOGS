import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../store/actions';
import Paginado from './Paginado';
import Navbar from './Navbar'
import Dog from './Dog';
import './Home.css';

export default function Dogs () {

    let dogs = useSelector((state) => state.filteredDogs)
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ dogsPerPage ] = useState(6);
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
            <Navbar setCurrentPage={setCurrentPage}/>
            <Paginado 
            dogsPerPage= {dogsPerPage}
            dogs= {dogs.length}
            paginado = {paginado} />
        <div className="dog_card_container">
                {currentDogs.length === 0 ? <div className="not_found">Dog not found</div> : (currentDogs?.map((dog) => {
                    return (
                            <Dog 
                                key={dog.id}
                                id={dog.id}
                                name={dog.name} 
                                image={dog.image} 
                                weight_min={dog.weight_min} 
                                weight_max={dog.weight_max} 
                                temperament={dog.temperament? dog.temperament : dog.temperaments}
                                life_span={dog.life_span}/>
                    )
                }))}
            </div> 
        </div>
    ) 
}