const proxy= require('http-proxy-middleware')
 
module.exports = function(app) {
    console.log('using proxy...')
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:3001' }));
}