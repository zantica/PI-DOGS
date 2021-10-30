import axios from 'axios'



export const GET_DOGS = 'GET_DOGS'
export const SEARCH_DOGS = 'SEARCH_DOGS'
export const SORT = 'SORT'

export function getAllDogs () {
    return function(dispatch) {
        axios.get('http://localhost:3001/dogs')
        .then((dogs) => {
            dispatch({
                type: GET_DOGS,
                payload: dogs.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function searchDogs(search) {
    return function(dispatch) {
        axios.get('http://localhost:3001/dogs?name=' + search)
        .then((dogs) => {
            dispatch({
                type: SEARCH_DOGS,
                payload: dogs.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}