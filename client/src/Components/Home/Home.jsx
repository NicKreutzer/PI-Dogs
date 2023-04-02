
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { 
    getAllDogs, 
    getAllTemperaments, 
    orderDogs, 
    orderbyWeight, 
    filterByTemperaments, 
    filterFromDogs,
    cleanFilter } from '../../Redux/actions';
import DogCard from '../DogCard/DogCard';
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import style from '../Home/Home.module.css';

export const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const allTemperaments = useSelector((state) => state.allTemperaments);
    //console.log(allDogs);
    const [order, setOrder] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const max = Math.round(allDogs.length / dogsPerPage);

    const handleOrder = (e) => {
        e.preventDefault();
        dispatch(orderDogs(e.target.value));
        setOrder(e.target.value);
    };
    const handleOrderByWeight = (e) => {
        e.preventDefault();
        dispatch(orderbyWeight(e.target.value));
        setOrder(e.target.value);
    };
    const handleFilterByTemperament = (e) => {
        e.preventDefault();
        dispatch(filterByTemperaments(e.target.value));
        setOrder(e.target.value);
    };
    const handleFilterFromDogs = (e) => {
        e.preventDefault();
        dispatch(filterFromDogs(e.target.value));
        setOrder(e.target.value);
    };
    const handleClean = (e) => {
        e.preventDefault();
        dispatch(cleanFilter(e.target.value));
        setOrder(e.target.value);
    };
    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments);
    }, [dispatch]);

    return(
        <div className={style.home}>
            <NavBar/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} max={max}/>
            <button type="submit" onClick={handleClean} className={style.btnClean}>Clean Filters</button>
            <select onChange={handleOrder} className={style.filter}>
                <option value="All">Order By Name</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <select onChange={handleOrderByWeight} className={style.filter}>
                <option value="All">Order By Weight</option>
                <option value="higher-weight">Higher Weight</option>
                <option value="lower-weight">Lower Weight</option>
            </select>

            <select onChange={handleFilterByTemperament} className={style.filter}>
                <option value="Filter-By-Temperaments" key="Filter-by-Temperaments">Filter By Temperaments</option>
                <option value="All" key="All">All</option>
                {allTemperaments.map((a) => (
                    <option value={a.name} key={a.name}>{a.name}</option>
                ))}
            </select>
            <select onChange={handleFilterFromDogs} className={style.filter}>
                <option value="Filter-From-Dog">Filter From Dog</option>
                <option value="All">All</option>
                <option value="db">Formulario</option>
                <option value="api">Api</option>
            </select>
            <div className={style.cards}>
                {Array.isArray(allDogs) ? 
                allDogs.slice(
                    (currentPage -1) * dogsPerPage,
                    (currentPage -1) * dogsPerPage + dogsPerPage
                ).map((a) => {
                    return(
                        <DogCard 
                        key={a.id} 
                        id={a.id} 
                        name={a.name}
                        image={a.image}
                        weight={a.weight}
                        temperament={a.temperament? a.temperament : a.Temperaments?.map((e) => e.name + ", ")}
                        />
                    )
                }) : null
            }
            </div>
        </div>
    )
};

export default Home;