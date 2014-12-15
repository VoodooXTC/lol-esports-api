/**
 * Created by jossayjacobo on 12/12/14.
 */
var Series	= require('../models/series'),
    Request = require('request');

exports.getSeries = get;

function get(req, res, next){
    var url = "http://na.lolesports.com:80/api/series.json";
    Request({
        url: url,
        json: true
    }, function(error, response, body){
       if(!error && response.statusCode === 200){
           console.log(body);
           res.json(body);

           for(var i = 0; i < body.length; i++){
               Series.update({ id: body[i].id}, body[i], {upsert: true}, function (err) {
                   console.log("Series added!");
               });
           }

       }
    });
}
