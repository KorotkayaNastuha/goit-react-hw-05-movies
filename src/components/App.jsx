import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  
  return (
     <Routes>
        <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} /> 
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />}/>
        </Route>
        </Route>
    </Routes>
    
  );
};
