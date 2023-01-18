export const URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'aabfee5c17d446062bdfd52627b4dc8d';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export async function getTrending() {
    const res = await fetch(`${URL}/trending/movie/day?api_key=${API_KEY}`);
    return await res.json();

}

export async function getFilmBySearch(page,query) {
    const res = await fetch(`${URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`);
    return await res.json();

}

export async function getFilmById(id) {
    const res = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}`);
    return await res.json();
}

export async function getCastById(id) {
    const res = await fetch(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
    return await res.json();
}

export async function getReviewsById(id) {
    const res = await fetch(`${URL}/movie/${id}/reviews?api_key=${API_KEY}`);
    return await res.json();
}