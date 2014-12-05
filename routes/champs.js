var Champ	= require('../models/champ');

exports.postChamp = post;

function post(req, res, next){
	var champ = new Champ();
	champ.name = req.body.name;
	champ.image = req.body.image;

	champ.save(function(err){
		if(err)
			res.send(err);

		res.json({ message: 'Champ created'});
	});
}