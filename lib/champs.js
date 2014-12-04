var config 	= require('../config'),
	mongoose= require('../mongo'),
	Schema 	= mongoose.Schema,

	Champ	= new Schema({
		id: 	String,
		name: 	String,
		image: 	String
	});

exports.post = post;

function post(req, res){
	var champ = new Champ();
	champ.name = req.body.name;
	champ.image = req.body.image;

	champ.save(function(err){
		if(err)
			res.send(err);

		res.json({ message: 'Champ created'});
	});
}