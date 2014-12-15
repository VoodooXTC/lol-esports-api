/**
 * Created by jossayjacobo on 12/15/14.
 */
var api     = require('../api'),
    Series  = require('../models/series'),
    Request = require('request');

exports.insert = insert;
exports.fetch  = fetchSeries;

function fetchSeries(callback){

    Request({
        url: api.seriesUrl,
        json: true
    }, function(error, response, body){
        if (error) { return callback(error); }

        console.log("Adding " + body.length + "Series");
        for(var i = 0; i < body.length; i++){
            console.log(body[i]);
            Series.update({ id: body[i].id}, body[i], {upsert: true},
                function (err) {

                }
            );
        }
    });
}

function insert(req, res){

}