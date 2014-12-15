var mongoose   = require('mongoose');
mongoose.connect('localhost:27017/lolesports1');
//mongoose.connect('mongodb://voodooxtc:7HORZTtHCx3E@ds055690.mongolab.com:55690/lolesports');

module.exports = mongoose;