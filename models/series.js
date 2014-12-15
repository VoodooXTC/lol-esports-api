/**
 * Created by jossayjacobo on 12/12/14.
 */
var mongoose     = require('../mongo');
var Schema       = mongoose.Schema;

var Series   = new Schema({
    labelPublic:    String,
    season:         String,
    label:          String,
    id: 	        Number,
    url:            String,
    tournaments:    [Number]
});

module.exports = mongoose.model('Series', Series);