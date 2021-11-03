import { ASCENDENTE, PESOASC } from "../../const/sort";
import { GET_DOGS, SEARCH_DOGS, FILTER_BY_WEIGHT, FILTER_CREATED, GET_TEMPERAMENTS, SORT } from "../actions"

const initialState = {
    dogs: [],
    filteredDogs: [],
    temperaments: []
}

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
        case FILTER_CREATED:
            const createdFilter = action.payload === 'created' ? state.allDogs.filter(d => d.createdInDb) : state.allDogs.filter(d => !d.createdInDb)
            return {
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : createdFilter
            }
        // case POST_DOG:
        //     return {
        //         ...state
        //     }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case SORT:
            let orderDogs = [...state.dogs]
            orderDogs = orderDogs.sort((a, b) => {
                if (a.name < b.name) {
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if (a.name > b.name) {
                    return action.payload === ASCENDENTE ? 1 : -1;
                }
                return 0
            })
            return{
                ...state,
                filteredDogs: [...orderDogs]
            }
        case FILTER_BY_WEIGHT:
            let dogsWeight = [...state.dogs]
            dogsWeight = dogsWeight.sort((a, b) => {
                if (a.weight_min < b.weight_min) {
                    return action.payload === PESOASC ? -1 : 1;
                }
                if (a.weight_min > b.weight_min) {
                    return action.payload === PESOASC ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                filteredDogs: [...dogsWeight]
            }
        default:
            return state
    }
}