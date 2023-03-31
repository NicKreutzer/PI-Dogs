
import { Link } from 'react-router-dom';
import style from './DogCard.module.css';

const DogCard = ({id, name, image, temperament, weight, Temperaments}) => {
    return(
        <div>
            <img src={image} alt={name}></img>
            <Link to={`/dogs/${id}`}><h2>{name}</h2></Link>
            <h4>Weight</h4>
            <p>{weight}</p>
            <h4>Temperament</h4>
            <p>{temperament?temperament:Temperaments?.map((a) => a.name)}</p>
        </div>
    )
};

export default DogCard;