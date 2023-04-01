
import React, { useState } from 'react';
import style from '../Pagination/Pagination.module.css';

const Pagination = ({ currentPage, setCurrentPage, max}) => {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(input +1);
        setCurrentPage(currentPage +1);
    };
    const previousPage = () => {
        setInput(input -1);
        setCurrentPage(currentPage -1);
    };
    const onChange = (e) => {
        setCurrentPage(e.target.value);
        if(e.target.value < 1 || e.target.value > Math.ceil(max) || isNaN(e.target.value)){
            setCurrentPage(1);
            setInput(1);
        } else {
            setCurrentPage(e.target.value)
        }
    };

    return(
        <div>
            <button disabled={currentPage <= 1} onClick={previousPage}>Prev</button>
            <input onChange={(e) => onChange(e)} name="page" value={input}/> <p>of {max}</p>
            <button onClick={nextPage} disabled={currentPage >= max}>Next</button>
        </div>
    )
};

export default Pagination;