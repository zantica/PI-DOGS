import { ASCENDENTE } from "../../const/sort";
import { GET_DOGS, SEARCH_DOGS, GET_TEMPERAMENTS, SORT, GET_DETAILS, FILTER_CREATED, FILTER_BY_WEIGHT } from "../actions"

const initialState = {
    dogs: [],
    filteredDogs: [],
    detail: [],
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
                        filteredDogs: orderDogs
                    }
                    case FILTER_BY_WEIGHT:
                        let dogsWeight = [...state.dogs]
                        dogsWeight = dogsWeight.sort((a, b) => {
                            if (a.weight_min < b.weight_min) {
                                return action.payload === ASCENDENTE ? -1 : 1;
                            }
                            if (a.weight_max > b.weight_max) {
                                return action.payload === ASCENDENTE ? 1 : -1;
                            }
                            return 0
                        })
                        return {
                            ...state,
                            filteredDogs: [...dogsWeight]
                        }
                        case FILTER_CREATED:
                            const createdFilter = action.payload === "created" ? state.dogs.filter(d => d.createdInDB) : state.dogs.filter(d => !d.createdInDB)
                            return {
                                ...state,
                                dogs: action.payload === "All" ? state.dogs : createdFilter
                            }
                        case GET_DETAILS:
                            return {
                                ...state,
                                detail: action.payload
                            }
        default:
            return state
    }
}