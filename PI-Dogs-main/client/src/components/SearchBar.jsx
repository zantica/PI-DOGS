import { useState } from 'react';
import { searchDogs } from '../store/actions';
import { useDispatch } from 'react-redux';

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

    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} placeholder="Ingrese un nombre" type="text" value={search} />
            <input type="submit" value="Buscar" />
        </form>
    )
}