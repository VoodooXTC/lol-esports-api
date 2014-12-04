var express    = require('express'),
    bodyParser = require('body-parser'),

    config	   = require('./config'),
    middleware = require('./middleware'),
    routes     = require('./routes'),

    app        = express();

// -- Configure ----------------------------------------------------------------
app.set('name', 'LoL eSports Api');
app.set('env', config.env);
app.set('port', config.port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REGISTER OUR ROUTES -------------------------------
app.use('/api', routes);
app.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// START THE SERVER
// =============================================================================
app.listen(config.port)

modules.exports = app;