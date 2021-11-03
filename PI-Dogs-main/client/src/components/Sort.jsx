import React from "react";
import { useDispatch } from 'react-redux';
import { ASCENDENTE, DESCENDENTE, PESOASC, PESODESC } from "../const/sort";
import { sort } from "../store/actions";

export default function Sort() {

    const dispatch = useDispatch()

    function selectChange(e) {
        e.preventDefault()
        dispatch(sort(e.target.value))
    }

    return (
        <div>
        <select name="select" onChange={selectChange}>
            <option value={ASCENDENTE}>A-Z</option>
            <option value={DESCENDENTE}>Z-A</option>
        </select>
        <select name="select" onChange={selectChange}>
            <option value={PESOASC}>Peso ↑</option>
            <option value={PESODESC}>Peso ↓</option>
        </select>
        </div>
    )
}