//import axios from 'axios';
//let axios = require('axios'); html에서 axios를 불러 들었기 때문에, 하지만 CORS policy문제가 발생한다.
let result;
            
let getSearchMovie = async () => {

  const ID_KEY = '**********';
  const SECRET_KEY = '************';

  try { 
               const {data: { 
                  items 
                }} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{ 
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

            