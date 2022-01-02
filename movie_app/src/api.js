import axios from 'axios';

const ID_KEY = '***********';
const SECRET_KEY = '********';
/*
const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY,
    'Access-Control-Allow-Origin': '*'
  }
});

export const naverMoviesApi = {
  search: word => api.get('/v1/search/movie.json', {
    params: {
      query: word,
      display: 10
    }
  })
};
*/

export const yts = {
  search: word => axios.get('https://movie-app-20162497-1.herokuapp.com/yts/api/v2/list_movies.json', {
    params: {
      sort_by : word.split(' ')[0]+'_count',
      order_by : 'desc',
      limit : word.split(' ')[1]
    }
  }
  ),
  detail : id => axios.get('https://movie-app-20162497-1.herokuapp.com/yts/api/v2/movie_details.json',{
    params:{
      movie_id :id
    }
  })
  
};
