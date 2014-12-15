var express    = require('express'),
    bodyParser = require('body-parser'),

    config	   = require('./config'),
    middleware = require('./middleware'),
    routes     = require('./routes'),

    app        = express(),
    router	   = express.Router();

// -- Configure ----------------------------------------------------------------
app.set('name', 'LoL eSports Api');
app.set('env', config.env);
app.set('port', config.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REGISTER OUR ROUTES -------------------------------
router.route('/champs')
		.post(routes.champs.postChamp);
router.route('/series')
        .get(routes.series.getSeries);

app.use('/api', router);

//app.post('/api/champs',    routes.champs.postChamp);

app.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

// START THE SERVER
// =============================================================================
app.listen(config.port)

module.exports = app;