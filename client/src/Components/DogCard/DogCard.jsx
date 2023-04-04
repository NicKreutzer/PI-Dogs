
import { Link } from 'react-router-dom';
import style from './DogCard.module.css';

const DogCard = ({id, name, image, temperament, weight, Temperaments}) => {
    return(
        <div className={style.container}>
            <div className={style.containerImage}>
                <img src={image} alt={name} width={250}/>
            </div>
            <Link to={`/dogs/${id}`} className={style.Link}><h2>{name}</h2></Link>
            <h3>Weight</h3>
            <h3>{weight}</h3>
            {/* <h4>Temperament</h4>
            <p>{temperament?temperament:Temperaments?.map((a) => a.name)}</p> */}
        </div>
    )
};

export default DogCard;