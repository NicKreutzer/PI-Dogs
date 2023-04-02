
import axios from 'axios';
import { 
    GET_ALL_DOGS, 
    GET_DOG_DETAIL, 
    ORDER, 
    ORDER_BY_WEIGHT, 
    FILTER_BY_TEMPERAMENTS, 
    FILTER_FROM_DOGS, ADD_DOG, 
    GET_DOGS_NAME, GET_ALL_TEMPERAMENTS, 
    CLEAN_DETAIL,
    GET_DOGS_BREED, 
    CLEAN_FILTER} from './action-types';

    export const getAllDogs = () => {
        return async(dispatch) => {
            const res = await axios('http://localhost:3001/dogs');
            const data = res.data;
            return dispatch({
                type: GET_ALL_DOGS,
                payload: data
            });
        };
    };
    export const getAllTemperaments = () => {
        return async(dispatch) => {
            const res = await axios('http://localhost:3001/temperaments');
            const data = res.data;
            const temp = data.filter((a) => a.name !== null);
            return dispatch({
                type: GET_ALL_TEMPERAMENTS,
                payload: temp
            });
        };
    };
    export const orderDogs = (name) => {
        return { 
            type: ORDER, 
            payload: name
        };
    };
    export const orderbyWeight = (weight) => {
        return {
            type: ORDER_BY_WEIGHT,
            payload: weight
        };
    };
    export const filterByTemperaments = (temperament) => {
        return {
            type: FILTER_BY_TEMPERAMENTS,
            payload: temperament
        };
    };
    export const filterFromDogs = (payload) => {
        return {
            type: FILTER_FROM_DOGS,
            payload
        };
    };
    export const getDogsName = (name) => {
        return async(dispatch) => {
            try {
                const res = await axios(`http://localhost:3001/dogs/name?name=${name}`);
                const data = res.data;
                return await dispatch({
                    type: GET_DOGS_NAME,
                    payload: data
                })
            } catch (error) {
                alert('No dog found.');
                return getAllDogs();
            };
        };
    };
    export const getDogsBreed = (breed) => {
        return async(dispatch) => {
            try {
                const res = await axios(`http://localhost:3001/dogs/breed?breed=${breed}`);
                const data = res.data;
                return await dispatch({
                    type: GET_DOGS_BREED,
                    payload: data
                })
            } catch (error) {
                alert('No breed found.')
                return getAllDogs();
            };
        };
    };
    export const getDogDetail = (id) => {
        return async(dispatch) => {
            const res = await axios(`http://localhost:3001/dogs/${id}`);
            const data = res.data;
            console.log(data);
            return dispatch({
                type: GET_DOG_DETAIL,
                payload: data
            });
        };
    };
    export const addDog = (payload) => {
        return async(dispatch) => {
            const res = axios('http://localhost:3001/dog', payload);
            const data = res.data;
            return await dispatch({
                type: ADD_DOG,
                payload: data
            });
        };
    };
    export const cleanDetail = () => {
        return {
            type: CLEAN_DETAIL
        };
    };
    export const cleanFilter = () => {
        return{
            type: CLEAN_FILTER
        };
    };