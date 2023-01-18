import { IMAGE_URL } from "components/API";
import { Link, useLocation } from 'react-router-dom';
import css from '../TrendingList/TrendingList.module.css';

export const TrendingList = ({ title, poster, id, name }) => {
    const location = useLocation();
    
    return <li className={css.item}>
        <Link to={`/movies/${id}`} state={{from: location}}>
            <p className={css.title}>{name}{ title}</p> 
            <img className={css.img} src={`${IMAGE_URL}${poster}`} width='300px' alt={title} />
        </Link>   
        </li>
          
}