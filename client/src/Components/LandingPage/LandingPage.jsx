
import React from "react";
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';

export default function LandingPage(){

    return(
        <div>
            <div>
                <h1>Henry Dogs</h1>
                <h3>by Nicolás Kreutzer</h3>
            </div>
            <Link to="/home">
                <div>
                    <button>Enter</button>
                </div>
            </Link>
        </div>
    )

};