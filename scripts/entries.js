/**
 * Created by yan on 16-3-3.
 */
var path = require('path');
var fs = require('fs');
var entries = fs.readdirSync(path.join(__dirname, '..', 'app', 'loaders'));
module.exports = 'module.exports=' + JSON.stringify(entries);