/**
 * Created by wyvern on 16/3/1.
 */
var path = require('path');

module.exports={
    entry:path.join(__dirname,'app','index.js'),
    output:{
        pathinfo:true,
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    }
}