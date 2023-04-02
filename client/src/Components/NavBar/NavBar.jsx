
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from '../NavBar/NavBar.module.css';

const NavBar = () => {
    return(
        <div className={style.navBar}>
            <Link to="/form">
                <button className={style.btn}>Add Dog Form</button>
            </Link>
            <SearchBar/>
        </div>
    )
};

export default NavBar;