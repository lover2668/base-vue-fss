const webpack = require('webpack');
module.exports = {
    publicPath: "/",
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://localhost:8080',
                changeOrigin:true,
            }
        }
    }
};