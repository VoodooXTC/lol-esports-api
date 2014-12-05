var mongoose     = require('../mongo');
var Schema       = mongoose.Schema;

var Champ   = new Schema({
    id: 	{ type: [Number], index: true },
    name: 	String,
    image: 	String
});

module.exports = mongoose.model('Champ', Champ);