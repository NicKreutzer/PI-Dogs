
import { useParams } from "react-router-dom"; // Para traer las propiedades - Retorna un obj.
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getDogDetail, cleanDetail } from '../../Redux/actions';
import style from './DogDetail.module.css';

const dogDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { name, image, height, weight, life_span, temperament, Temperaments } = useSelector((state) => state.dogDetail);

    useEffect(() => {
        dispatch(getDogDetail(id));
        return () => dispatch(cleanDetail())
    }, [dispatch, id]);

    return(
        <div>
            <Link to="/home">Back</Link>
            <div>
                <img src={image} alt={name}></img>
                <h1>{name}</h1>
                <div>
                    <h3>Height: </h3><p>{height}</p>
                    <h3>Weight: </h3><p>{weight}</p>
                    <h3>Life span: </h3><p>{life_span}</p>
                    <h3>Temperaments: </h3><p>{temperament?temperament:Temperaments?.map((a) => a.name + ", ")}</p>
                </div>
            </div>
        </div>
    )
};

export default dogDetail;