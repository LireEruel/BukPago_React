const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use (
        '/api',
        createProxyMiddleware({
            target: 'https://lireeruel.github.io/BukPago_React/',
            changeOrigin : true,
        })
    )
}