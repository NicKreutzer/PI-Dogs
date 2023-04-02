
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDogs, getDogsName, getAllTemperaments, getDogsBreed } from '../../Redux/actions';
// import { Link } from 'react-router-dom';
import style from '../SearchBar/SearchBar.module.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    };
    function handleSubmit(e) {
        e.preventDefault();
        if (name !== "") {
            dispatch(getDogsName(name));
            setName("");
        } else {
            alert("Insert a name to search");
        }
    };
    // function handleSubmit2(e){
    //     e.preventDefault();
    //     if(breed !== ""){
    //         dispatch(getDogsBreed(breed));
    //         setBreed("");
    //     } else {
    //         alert ("Insert a breed to search")
    //     }
    // };
    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
    }, [dispatch]);

    return(
        <div className={style.search}>
            <input value={name} type="text" placeholder="Search here..." onChange={handleInputChange}/>
            <button type="submit" onClick={handleSubmit}>Search</button>
            {/* <button type="submit" onClick={handleSubmit2}>Breed</button> */}
        </div>
    )
};

export default SearchBar;