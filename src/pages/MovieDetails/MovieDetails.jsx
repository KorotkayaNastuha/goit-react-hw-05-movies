import { Suspense, useEffect, useState } from "react";
import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import { IMAGE_URL } from "components/API";
import { getFilmById } from "components/API";
import css from '../MovieDetails/MovieDetails.module.css';

export default function MovieDetails() {
    const [film, setFilm] = useState([]);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        if (movieId) {
            getFilmById(movieId).then(setFilm);
        }
    }, [movieId]);

    return <div>
        <Link to={location.state?.from ?? '/'}>
            <button className={css.linkButton} type="button">Go back</button>
        </Link>
        <div className={css.details}> 
            
            <img src={`${IMAGE_URL}${film.poster_path}`} width="300" alt={film.title} />
            <div className={css.movieDetails}>
            <h2>{film.title}</h2>
            <p>
                User Score:{''}
                {Math.round((film.vote_average * 10))}%
                </p>    
            <p>Overview:{film.overview}</p>
                <p>Additional information</p>
            <ul >
                <li >
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
                </ul>
        </div>
        </div> 
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        
    </div>

}