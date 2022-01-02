const express = require('express');
const app = express();
app.use(express.static('public'));

const cors = require('cors'); 
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 4000;

const { createProxyMiddleware } = require('http-proxy-middleware');

//module.exports = function(app){
    
  app.use( // '/api',
      createProxyMiddleware('/apw',  {
          target: 'http://api.openweathermap.org/',
          changeOrigin: true,
          pathRewrite:{ '^/apw/':'/' }
      }),
      createProxyMiddleware('/api', { // api라는 주소가 있으면 openai.naver.com으로 보낸 후 요청을 받는다. 즉 직접 접근하지 않는다.
        target: 'https://openapi.naver.com/',
        changeOrigin: true,
        pathRewrite:{ '^/api/':'/' } // 그리고 api를 제거하고 기존 url로 바꾸어준다.
      }),
      createProxyMiddleware('/yts', {
        target: 'https://yts.lt/',
        changeOrigin: true,
        pathRewrite:{ '^/yts/':'/' },
        followRedirects: true
      }),
      createProxyMiddleware('/img-yts', {
        target: 'https://img.yts.mx/',
        changeOrigin: true,
        pathRewrite:{ '^/img-yts/':'/' }
      })   );

app.get('/', (req, res) => res.send("Hello World! I'm YMK"));

app.get('*', (request, response) => {
    response.send(404);
    response.send('해당 경로에는 아무것도 없습니다.');
});

app.listen(port, () => console.log(`Example server listening on port ${port}!`));
