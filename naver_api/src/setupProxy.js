const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  console.log("proxy");
  app.use(
      createProxyMiddleware( '/api', {
          target: 'https://openapi.naver.com',
          changeOrigin: true,
          pathRewrite:{
            '^/api/':'/'
          }
      }),
      createProxyMiddleware('/yts', {
        target: 'https://movie-app-2021.herokuapp.com/',
        changeOrigin: true,

        followRedirects: true
      }),
      createProxyMiddleware('/img-yts', {
        target: 'https://movie-app-2021.herokuapp.com/',
        changeOrigin: true,

      })
  )
};
