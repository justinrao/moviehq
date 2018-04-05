import axios from 'axios'

const commonParams = {
  api_key: "15d2ea6d0dc1d476efbca3eba2b9bbfb"
};

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const unwrapData = ({data}) => data;

const request = (name, params = {}) =>
  instance
    .get(`/${name}`, {
      params: {...commonParams, ...params}
    })
    .then(unwrapData);


class MoviesApi {

  static search(params) {
    return request('search/movie', params);
  }

  static get(movieId) {
    return request('movie/' + movieId)
  }
}

export default MoviesApi
