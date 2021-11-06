import axios from 'axios'
export const GET_DOGS = 'GET_DOGS'
export const SEARCH_DOGS = 'SEARCH_DOGS'
export const FILTER_CREATED = 'FILTER_CREATED'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const SORT = 'SORT'
export const GET_DETAILS = 'GET_DETAILS'
export const FILTER_BY_WEIGHT = 'FILTER_BY_WEIGHT'
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'


export function getAllDogs() {
    return function(dispatch) {
        axios.get(`http://localhost:3001/dogs`)
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
};

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
};

export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
};

export function getTemperaments() {
    return async function(dispatch) {
        let temps = await axios.get('http://localhost:3001/temperament')
        return dispatch({ 
            type: GET_TEMPERAMENTS, 
            payload: temps.data
        })
    }
};

export function postDog(payload) {
    return async function(dispatch) {
        const postDog = axios.post('http://localhost:3001/dogs', payload)
        return postDog;
    }
};

export function sort(order) {
    return {
        type: SORT,
        payload: order
    }
};

export function sortByWeight(order) {
    return {
        type: FILTER_BY_WEIGHT,
        payload: order
    }
}

export function filterByTemperament(order) {
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload: order
    }
}

export function getDetail(id) {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/dogs/' + id);
            return dispatch ({
                type: GET_DETAILS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

