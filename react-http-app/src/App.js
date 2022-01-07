import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

function App() {
   const [movies, setMovie] = useState([]);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const fetchMovieHandler = useCallback(async () => {
      try {
         setLoading(true);
         setError(null);
         const res = await fetch(
            'https://react-http-a0cb1-default-rtdb.firebaseio.com/movies.json'
         );

         if (!res.ok) {
            throw new Error('Something went wrong');
         }

         const data = await res.json();
         console.log(data);
         const loadedMovie = [];
         for (let key in data) {
            loadedMovie.push({
               id: key,
               title: data[key].title,
               openingText: data[key].openingText,
               releaseDate: data[key].releaseDate,
            });
         }

         // const tranformData = data.results.map((movieData) => {
         //    return {
         //       title: movieData.title,
         //       id: movieData.episode_id,
         //       releaseDate: movieData.release_date,
         //       openingText: movieData.opening_crawl,
         //    };
         // });

         setMovie(loadedMovie);
         setLoading(false);
      } catch (err) {
         setError(err.message);
      }
      setLoading(false);
   }, []);
   useEffect(() => {
      fetchMovieHandler();
   }, [fetchMovieHandler]);
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

   const addMoviesHandler = async (movie) => {
      try {
         const res = await fetch(
            'https://react-http-a0cb1-default-rtdb.firebaseio.com/movies.json',
            {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(movie),
            }
         );
         if (!res.ok) {
            throw new Error('something went wrong');
         }
         const data = await res.json();
         console.log(`success+${data}`);
         fetchMovieHandler();
      } catch (err) {
         setError(error.message);
         console.log(err.message);
      }
   };

   return (
      <React.Fragment>
         <section>
            <AddMovie onAddMovie={addMoviesHandler} />
         </section>
         <section>
            <button onClick={fetchMovieHandler}>Fetch Movies</button>
         </section>
         <section>{content}</section>
      </React.Fragment>
   );
}

export default App;
