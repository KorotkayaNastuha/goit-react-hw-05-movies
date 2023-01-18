import { IMAGE_URL } from "components/API"
import css from '../CastInfo/CastInfo.module.css';
import image from '../../image/pngegg.png'

export const CastInfo = ({ poster, original_name, character }) => {
    
    const castImg = () => {
        if(poster !== null){
        return`${IMAGE_URL}${poster}`
    }
    return image
    }


    return <div className={css.castCard}>
        <img className={css.castImg} src={castImg()} width="160" alt={original_name} />
            <p className={css.castInfo}>Name:{original_name}</p>
            <p className={css.castInfo}>Character:{character}</p>
        </div>
}