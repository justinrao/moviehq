import React, {Component} from 'react';
import {Box, Button, Container, Heading, Icon, IconButton, Text} from 'gestalt';
import MoviePoster from './MoviePoster';
import MoviesApi from '../services/moviesApi'

const getPosterUrl = (movieId) => {

  const movies = await MoviesApi.get(movieId);

  console.log('movies ' + movies);
  if (movies.movie_results && movies.movie_results.length > 0) {
    const movie = movies.movie_results[0];
    console.log('poster ' + 'http://image.tmdb.org/t/p/w500' + movie.poster_path);
    return 'http://image.tmdb.org/t/p/w500' + movie.poster_path;
  }
  return 'http://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg';
}

const AnswerResult = ({answer}) => (

  <Box display="flex" direction="row" alignItems="center" justifyContent="center" height={300}>
    {answer.answer ? <MoviePoster title={answer.title} posterUrl={getPosterUrl(answer.tconst)} onClick={getPosterUrl}></MoviePoster>
    : <MoviePoster title={answer.title} posterUrl={getPosterUrl(answer.tconst)} onClick={getPosterUrl}></MoviePoster>}
  </Box>
);

export default AnswerResult;
