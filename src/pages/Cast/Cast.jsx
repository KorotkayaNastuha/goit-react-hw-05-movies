import { useEffect, useState } from "react";
import { getCastById } from "components/API";
import { useParams } from "react-router-dom";
import css from '../Cast/Cast.module.css';
import { CastInfo } from "components/CastInfo/CastInfo";
export default function Cast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getCastById(movieId).then(array => setCast(array.cast));  
    }, [movieId])
    
    
    return <div className={css.cast}>
        {cast && cast.map(({ id, profile_path, original_name, character }) => {      
        return <CastInfo key={id}
                poster={profile_path}
                name={original_name}
                character={character}
            />
        })} 
        {cast.length === 0 && <p>Sorry!No information about the actors.</p>}
        </div>
 
}