
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDogs, getDogsName, getAllTemperaments } from '../../Redux/actions';
// import { Link } from 'react-router-dom';
import style from '../SearchBar/SearchBar.module.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    };
    function handleSubmit(e) {
        e.preventDefault();
        if(name !== "") {
            dispatch(getDogsName(name));
            setName("");
        } else {
            alert("Insert a name to find")
        }
    };
    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
    }, [dispatch]);

    return(
        <div>
            <input value={name} type="text" placeholder="Search here..." onChange={handleInputChange}/>
            <button type="submit" onClick={handleSubmit}>Search</button>
        </div>
    )
};

export default SearchBar;