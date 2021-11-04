import React from "react";
import { useDispatch } from 'react-redux';
import { ALL, API, ASCENDENTE, CREATED, DESCENDENTE } from "../const/sort";
import { filterCreated, sort, sortByWeight } from "../store/actions";
import './Sort.css'

export default function Sort() {

    const dispatch = useDispatch()

    function selectChange(e) {
        e.preventDefault()
        dispatch(sort(e.target.value))
    }
    
    function selectWeight(e) {
        e.preventDefault()
        dispatch(sortByWeight(e.target.value))
    }
    
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    }

    return (
        <div className="sort_container">
        <select onChange={e => selectChange(e)} className="sort_names">
            <option value={ASCENDENTE}>A-Z</option>
            <option value={DESCENDENTE}>Z-A</option>
        </select>
        <select onChange={ e => selectWeight(e)} className="sort_weight">
            <option value={ASCENDENTE}>Menor a mayor peso</option>
            <option value={DESCENDENTE}>Mayor a menor peso</option>
        </select>
        <select onChange={e => handleFilterCreated(e)} className="sort_created">
            <option value={ALL}>Todos</option>
            <option value={CREATED}>Creados</option>
            <option value={API}>Api</option>
        </select>
        </div>
    )
}