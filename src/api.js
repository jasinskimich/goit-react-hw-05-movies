const MY_API_KEY = 'ba80dd2d26907ca844be2662df6ef522';

function getTrendingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${MY_API_KEY}`
  ).then(response => response.json());
}
function searchMovies(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${query}`
  ).then(response => response.json());
}

function fetchMovieDetails(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${MY_API_KEY}`
  ).then(response => response.json());
}
function fetchMovieCredits(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${MY_API_KEY}`
  ).then(response => response.json());
}
function fetchMovieReviews(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${MY_API_KEY}`
  ).then(response => response.json());
}

export {
  getTrendingMovies,
  searchMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};
