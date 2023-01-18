import { useState } from "react";
import css from '../SearchForm/SearchForm.module.css';
import { BiSearchAlt } from 'react-icons/bi';
export const SearchForm = ({ onSubmit }) => {
    
    const [searchQuery, setSearchQuery] = useState([]);
    
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(searchQuery);
    }
    const handleChange = event => {
        setSearchQuery(event.target.value)
    }

    return <div >
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.formSearch}
                type="text"
                placeholder="Search"
                name="query"
                autoComplete="off"
                autoFocus
                onChange={handleChange}
                value={searchQuery}>
                </input>
            <button className={css.formBtn} type="submit">
                <BiSearchAlt className={css.BiSearchAlt}/>
            </button>   
        </form>    
    </div>
}
