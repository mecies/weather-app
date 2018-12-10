const path = require('path');


module.exports = {
    mode: "development",
    entry: {
       
       main: './main.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
    
    
};