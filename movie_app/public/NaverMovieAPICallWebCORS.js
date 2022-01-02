//import axios from 'axios';
//let axios = require('axios');
let result;
            
let getSearchMovie = async () => {

  const ID_KEY = '*********';
  const SECRET_KEY = '**********';

  try { 
               const {data: { 
                  items 
//                }} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{ proxy 버전에서는 주소로 받지 않고 개발자 서버에 도착함
//                  
                  }} = await axios.get('/api/v1/search/movie.json',{ 
                    params:{ 
                    query: "히어로", 
                    display: 20 
                  }, 
                  headers: { 
                    'X-Naver-Client-Id': ID_KEY, 
                    'X-Naver-Client-Secret': SECRET_KEY 
                  } 
                }); 
                console.log("items: ", items);
                result = items;
  } catch (error) { 
      console.log(error); 
  } 
}; 

getSearchMovie();
console.log("result: ", result);

            