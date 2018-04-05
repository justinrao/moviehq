import React, {Component} from 'react';
import {Box, Button, Container, Heading, Icon, IconButton, Text} from 'gestalt';
import MoviePoster from './MoviePoster';
import MoviesApi from '../services/moviesApi'
import Sound from 'react-sound'
// var Sound = require('react-sound').default;


const POSTER_URL_PREFIX = 'http://image.tmdb.org/t/p/w500/';

const SOUND_CORRECT = 'https://freesound.org/data/previews/131/131660_2398403-lq.mp3';
const SOUND_INCORRECT = 'https://freesound.org/data/previews/33/33245_65091-lq.mp3';

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

  getSound = (correct) => {
    return correct? SOUND_CORRECT: SOUND_INCORRECT;
  }

  renderPoster = () => {
    return this.state.posterPath &&
      <MoviePoster title={this.props.correctAnswer.title} posterUrl={this.state.posterPath} height={350}/>
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

        <Sound url={this.getSound(correct)} playStatus={Sound.status.PLAYING} autoLoad={true} />

        {!this.state.showIcon && this.renderPoster()}
        {!this.state.showIcon && <Heading size="xs">Answer: {this.props.correctAnswer.title}</Heading>}
    </Box>)
  }
}


export default AnswerResult;
