var champs 	= require('./champs'),
									// import other routes here
	router 	= express().Router();

router.route('/champs')
		.post(champs.post);

module.exports = router;