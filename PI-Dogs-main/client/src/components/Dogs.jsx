import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../store/actions'
import Dog from './Dog';
import './Dogs.css'


export default function Dogs () {

    let dogs = useSelector((state) => state.dogs)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])
    
    console.log(dogs)

    return <div className="dog_card_container">
        {dogs.map((dog) => {
            return <Dog 
            name={dog.name} 
            image={dog.image} 
            weight_min={dog.weight_min} 
            weight_max={dog.weight_max} 
            temperament={dog.temperament} />
        })}
    </div>
}