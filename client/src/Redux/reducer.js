
import {
    GET_ALL_DOGS,
    GET_DOG_DETAIL,
    ORDER,
    ORDER_BY_WEIGHT,
    FILTER_BY_TEMPERAMENTS,
    FILTER_FROM_DOGS,
    ADD_DOG,
    GET_DOGS_NAME,
    GET_ALL_TEMPERAMENTS,
    CLEAN_DETAIL
} from './action-types';

const initialState = {
    allDogs: [],
    dogs: [],
    orderDogs: [],
    allTemperaments: [],
    dogDetail: [],
    newDog: []
};
const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogs: action.payload
            };
        case GET_ALL_TEMPERAMENTS: 
            return {
                ...state,
                allTemperaments: action.payload
            };
        case ORDER:
            const orderDogs = action.payload === 'All' || action.payload === 'A-Z' ? state.allDogs.sort(function (a, b) {
                if(a.name > b.name) {
                    return 1
                };
                if(b.name > a.name) {
                    return -1
                };
                return 0;
            }) : state.allDogs.sort(function (a, b){
                if(a.name > b.name){
                    return -1
                };
                if(a.name > b.name){
                    return 1
                };
                return 0
            });
            return {
                ...state,
                allDogs: orderDogs
            };
        case ORDER_BY_WEIGHT:
            const orderByWeight = action.payload === 'All' ? state.allDogs.sort(function (a, b){
                if(a.name > b.name){
                    return 1
                };
                if(b.name > a.name){
                    return -1
                };
                return 0
            }) : action.payload === 'higher-weight' ? state.allDogs.sort(function (a, b){
                if(a.weight > b.weight){
                    return -1
                };
                if(b.weight > a.weight){
                    return 1
                };
                return 0
            }) : state.allDogs.sort(function (a, b){
                if(a.weight > b.weight){
                    return 1
                };
                if(b.weight > a.weight){
                    return -1
                };
                return 0
            });
            return {
                ...state,
                allDogs: orderByWeight
            };
        case FILTER_BY_TEMPERAMENTS:
            const allTemperaments = state.dogs;
            const temperamentFilter = action.payload === 'All' || action.payload === 'Filter-by-Temperaments'
            ? allTemperaments 
            : allTemperaments.filter((a) => 
            a.temperament && a.temperament.split(', ').find((e) => 
            e === action.payload));
            return {
                ...state,
                allDogs: temperamentFilter
            };
        case FILTER_FROM_DOGS:
            const filter = action.payload === 'All' || action.payload === 'Filter_From_Dog'
            ? state.allDogs
            : (action.payload === 'db')
            ? state.dogs.filter((a) => (a.createdAt))
            : state.dogs.filter((a) => (!(a.createdAt)))
            return {
                ...state,
                allDogs: filter
            };
        case GET_DOGS_NAME:
            return {
                ...state,
                allDogs: action.payload,
            };
        case GET_DOG_DETAIL:
            return {
                ...state,
                dogDetail: action.payload[0]
            };
        case ADD_DOG:
            const newDog = state.allDogs.slice();
            newDog.push(action.payload);
            return {
                ...state,
                allDogs: newDog
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                dogDetail: {}
            };
        default:
            return {
                ...state
            };
    }
};

export default reducer;