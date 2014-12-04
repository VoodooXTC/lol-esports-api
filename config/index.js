var env = process.env,
	config;

config = {
	env 		  : env.NODE_ENV,
	idDevelopment : env.NODE_ENV !== 'production',
	isProduction  : env.NODE_ENV === 'production',

	database	: env.DATABASE_URL,
	port		: env.PORT || 8080
};


module.exports = config;