import React, {Component} from 'react';
import {Box, Button, Container, Heading, Icon, IconButton, Text} from 'gestalt';
import MoviePoster from './MoviePoster';
import MoviesApi from '../services/moviesApi'


const POSTER_URL_PREFIX = 'http://image.tmdb.org/t/p/w500/';

class AnswerResult extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showIcon: true
    };
  }


  componentDidMount() {


    const movieId = this.props.correctAnswer.tconst;


    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        showIcon: false
      }))
    }, 1200);
    MoviesApi.get(movieId)
      .then(response => {

        let posterPath;
        if (response.movie_results &&  response.movie_results.length > 0 && response.movie_results[0].poster_path) {
          posterPath = POSTER_URL_PREFIX + response.movie_results[0].poster_path;
        }

        this.setState({posterPath});
      });
  }

  renderPoster = () => {
    return this.state.posterPath &&
      <MoviePoster title={this.props.correctAnswer.title} posterUrl={this.state.posterPath} height={300}/>
  };

  render() {

    const correct = this.props.answer.answer;
    return (
      <Box display="flex" direction="column" alignItems="center" justifyContent="center" height={400}>
        {this.state.showIcon &&
        <Box position="absolute">
          {correct ? <Icon color="green" icon="check" size={120}></Icon>
            : <Icon color="red" icon="cancel" size={120}></Icon>}
        </Box>}

        {!this.state.showIcon && this.renderPoster()}
        {!this.state.showIcon && <Heading size="xs">Correct Answer: {this.props.correctAnswer.title}</Heading>}
    </Box>)
  }
}


export default AnswerResult;
