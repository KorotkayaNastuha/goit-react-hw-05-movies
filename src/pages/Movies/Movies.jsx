import { SearchForm } from "components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilmBySearch } from "components/API";
import { TrendingList } from "components/TrendingList/TrendingList";
import css from '../Movies/Movies.module.css';

export default function Movies() {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
    

useEffect(() => {
    if (query) {
      getFilmBySearch(page, query).then((films) => {
        setFilms(films.results);
        })
    }
}, [page, query])
    
  const changeParams = params => {
    setSearchParams(params !== '' ? { query: params } : {})
    setPage(1);
  }
    return <div>
        <SearchForm onSubmit={changeParams} />
        <div className={css.gallery}>
         {films && films.map(({ title, poster_path, id, name }) => {
        
      return <TrendingList key={id}
        name={name}
        title={title}
        id={id}
        poster={poster_path}
        />})}</div>
     </div>
}