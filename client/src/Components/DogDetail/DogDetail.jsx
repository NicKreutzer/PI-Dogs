
import { useParams } from "react-router-dom"; // Para traer las propiedades - Retorna un obj.
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getDogDetail, cleanDetail } from '../../Redux/actions';
import style from './DogDetail.module.css';
import atras from '../../Components/atras.png'

const DogDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { name, image, height, weight, life_span, temperament, Temperaments } = useSelector((state) => state.dogDetail);

    //console.log(name)
    useEffect(() => {
        dispatch(getDogDetail(id));
        return () => dispatch(cleanDetail())
    }, [dispatch, id]);
    

    return(
        <div>
            <Link to="/home"><button className={style.btn}><img src= {atras} alt= "Home" width={35}></img></button></Link>
                <h1 className={style.title}>{name}</h1>
            <div className={style.container}>
                <div className={style.imgColumn}>
                    <img src={image} alt={name} className={style.img}></img>
                </div>
                <div className={style.details}>
                    <h3>Height: </h3><p>{height}</p>
                    <h3>Weight: </h3><p>{weight}</p>
                    <h3>Life span: </h3><p>{life_span}</p>
                    <h3>Temperaments: </h3><p>{temperament?temperament:Temperaments?.map((a) => a.name + ", ")}</p>
                </div>
            </div>
        </div>
    )
};

export default DogDetail;