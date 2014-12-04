var champs 	= require('../lib/champs'),
	router	= express().Router(); // how the hell do I get the express() variable here?? o.O can I just call it like this??

router.route('/champs')
		.post(champs.post);