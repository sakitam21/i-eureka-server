//连接mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ieureka');

//为这次连接绑定到事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

module.exports = db;