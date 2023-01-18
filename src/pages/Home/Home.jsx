import { useEffect, useState } from "react";
import css from '../Home/Home.module.css';
import { getTrending } from "components/API";
import { TrendingList } from "components/TrendingList/TrendingList";


export default function Home() {
    const [trendingFilm, setTrendingFilm] = useState();

    useEffect(() => {
        getTrending().then(films => setTrendingFilm(films.results))
    }, [])

    return <div className={css.container}>
        <h1 className={css.item}>Popular films </h1>
        <div className={css.gallery}>
            {trendingFilm && trendingFilm.map(({ title, poster_path, id, name }) => {
                return <TrendingList key = {id}
                    name = {name}
                    title = {title}
                    id = {id}
                    poster ={poster_path}/>})}
            </div>
    </div>
}

