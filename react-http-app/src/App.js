import React, { useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';
import axios from 'axios';
function App() {
   const [movies, setMovie] = useState([]);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const fetchMovieHandler = async () => {
      try {
         setLoading(true);
         setError(null);
         const res = await axios({
            method: 'get',
            url: 'https://swapi.dev/api/films',
         });

         const tranformData = res.data.results.map((movieData) => {
            return {
               title: movieData.title,
               id: movieData.episode_id,
               releaseDate: movieData.release_date,
               openingText: movieData.opening_crawl,
            };
         });
         setMovie(tranformData);
         setLoading(false);
      } catch (err) {
         if (err.status !== 200) {
            setError(err.message);
         }
      }
      setLoading(false);
   };
   let content = <p>No Movie Found</p>;
   if (movies.length > 0) {
      content = <MoviesList movies={movies} />;
   }
   if (error) {
      content = <p>{error}</p>;
   }
   if (isLoading) {
      content = <p>Loading...</p>;
   }

   return (
      <React.Fragment>
         <section>
            <button onClick={fetchMovieHandler}>Fetch Movies</button>
         </section>
         <section>{content}</section>
      </React.Fragment>
   );
}

export default App;
