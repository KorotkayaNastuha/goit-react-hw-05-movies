import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "components/API";
import css from '../Reviews/Reviews.module.css';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        if(movieId){
        getReviewsById(movieId).then(array => setReviews(array.results));
    }}, [movieId])
    
    return <div className={css.reviews}>
        {reviews && reviews.map(({ id, author, created_at,content }) => {
            return <div key={id}>
                
                <p>Author:{author}</p>
                <p>Created_at:{created_at}</p>
                <p>Content:{ content}</p>
               
            </div>
        })}
        {reviews.length === 0 && <p>Sorry!There is no information about this movie.</p>}
    </div>
}