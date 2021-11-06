import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ALL, API, ASCENDENTE, CREATED, DESCENDENTE } from "../const/sort";
import { filterByTemperament, filterCreated, getTemperaments, sort, sortByWeight } from "../store/actions";
import './Sort.css';


export default function Sort() {
    const temperaments = useSelector(state => state.temperaments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    function selectChange(e) {
        e.preventDefault()
        dispatch(sort(e.target.value))
    };
    
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    };

    function selectWeight(e) {
        e.preventDefault()
        dispatch(sortByWeight(e.target.value))
    };

    function sortByTemp(e) {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
    };

    return (
        <div className="sort_container">
        <select onChange={selectChange} className="sort_names">
            <option value={ASCENDENTE}>A-Z</option>
            <option value={DESCENDENTE}>Z-A</option>
        </select>
        <select onChange={handleFilterCreated} className="sort_created">
            <option value={ALL}>Todos</option>
            <option value={CREATED}>Creados</option>
            <option value={API}>Api</option>
        </select>
        <select onChange={selectWeight} className="sort_weight">
            <option disable="true" value={ALL}>Por peso</option>
            <option value={ASCENDENTE}>Menor a mayor peso</option>
            <option value={DESCENDENTE}>Mayor a menor peso</option>
        </select>
        <select onChange={sortByTemp} className="temperamentos">
            <option disable="true" value={ALL}>Por temperamento</option>
                {temperaments?.map((temps) => {
                return <option key={temps.name}>{temps.name}</option>})}
        </select>
        </div>
    );
};