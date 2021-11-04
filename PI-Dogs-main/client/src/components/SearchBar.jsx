import { useState } from 'react';
import { searchDogs, getAllDogs } from '../store/actions';
import { useDispatch } from 'react-redux';
import './SearchBar.css'

export default function SearchBar() {

    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch()
    
    function onSubmit(e) {
        e.preventDefault();
        dispatch(searchDogs(search))
    }

    function onChange(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }

    function onReload(e) {
        e.preventDefault();
        dispatch(getAllDogs())
    }

    return (
        <div className="search_container">
        <form onSubmit={onSubmit}>
            <input onChange={onChange} placeholder="Ingrese un nombre" type="text" value={search} className="input_dogs" />
            <input type="submit" value="Buscar" className="button_submit" />
        </form>
        <form onSubmit={onReload}>
            <input type="submit" value="Limpiar filtros" />
        </form>
        </div>
    )
}