import { ASCENDENTE, CREATED, ALL } from "../../const/sort";
import { GET_DOGS, SEARCH_DOGS, GET_TEMPERAMENTS, SORT, GET_DETAILS, FILTER_CREATED, FILTER_BY_WEIGHT, FILTER_BY_TEMPERAMENT } from "../actions";

const initialState = {
    dogs: [],
    filteredDogs: [],
    detail: [],
    temperaments: []
};

export default function reducer (state = initialState, action) {

    switch(action.type) {
        case GET_DOGS: 
            return {
                ...state,
                dogs: action.payload,
                filteredDogs: action.payload
            }
        case SEARCH_DOGS:
            return {
                ...state,
                filteredDogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case SORT:
            let orderDogs = [...state.dogs]
            orderDogs = orderDogs.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return action.payload === ASCENDENTE ? 1 : -1;
                }
                return 0
            })
            return{
                ...state,
                filteredDogs: orderDogs
            }
        case FILTER_BY_WEIGHT:
            let dogsWeight = [...state.dogs]
            dogsWeight = dogsWeight.sort((a, b) => {
                if ((a.weight_min) < (b.weight_min)) {
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if ((a.weight_min) > (b.weight_min)) {
                    return action.payload === ASCENDENTE ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                filteredDogs: [...dogsWeight]
            }
        case FILTER_CREATED:
            const createdFilter = 
            action.payload === CREATED
            ? state.filteredDogs.filter(dog => dog.createdInDB) 
            : state.filteredDogs.filter(dog => !dog.createdInDB)
            return {
                ...state,
                filteredDogs: action.payload === ALL ? state.dogs : createdFilter
            }
        case FILTER_BY_TEMPERAMENT:
            const allDogs = state.dogs
            const tempFilter = 
            action.payload === ALL
            ? allDogs
            : allDogs.filter((e) =>
            e.temperament?.includes(action.payload))
            return {
                ...state,
                filteredDogs: tempFilter
            }
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    };
};