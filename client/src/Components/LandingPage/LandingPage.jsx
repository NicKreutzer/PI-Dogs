
import React from "react";
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';

export default function LandingPage(){

    return(
        <div className={style.container}>
            <div className={style.data}>
                <h1>Henry Dogs</h1>
                {/* <h3>by Nicolás Kreutzer</h3> */}
            </div>
            <Link to="/home">
                <div className={style.btn}>
                    <button>Enter</button>
                </div>
            </Link>
            <br/>
            <br/>
            <br/>
            <div><h2>by Nicolás Kreutzer</h2></div>
        </div>
    )
};