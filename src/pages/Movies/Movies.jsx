import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MovieList, MovieItem } from '../Movies/Movies.styled.js';
import { useEffect } from 'react';
import { searchMovies } from '../../api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  const handleSearch = async event => {
    event.preventDefault();
    const data = await searchMovies(query);
    setMovies(data.results);
    setSearchParams({ name: query });
  };

  useEffect(() => {
    async function fetchTrendingMovies(movieName) {
      const data = await searchMovies(movieName);
      setMovies(data.results);
    }

    fetchTrendingMovies(movieName);
    setQuery(movieName);
  }, [movieName]);

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Type a movie name.."
            value={query}
            onChange={handleOnChange}
            id="movie_search"
          />
          <button type="submit">Find!</button>
        </form>
      </div>
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </>
  );
};

export default Movies;
