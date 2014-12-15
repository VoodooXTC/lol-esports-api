/**
 * Created by jossayjacobo on 12/12/14.
 */
var Series	= require('../models/series');

exports.getSeries = get;

function get(req, res, next){
    Series.find({}).exec(function(error, series){
       res.json(series);
    });
}
