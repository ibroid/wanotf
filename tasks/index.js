'use strict';
const path = require('path')
const fs = require('fs')
const basename = path.basename(__filename)
const con = [];

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') && (!file.includes('-'));
}).forEach(file => {
    const model = require(path.join(__dirname, file))
    con.push(model)
});
module.exports = con;