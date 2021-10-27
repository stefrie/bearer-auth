'use strict';

module.exports = (req, res, next) => {
	console.log('*********ERROR 404*************', err);
	let error = { error: 'Resource Not Found' };
	res.statusCode = 404;
	res.statusMessage = 'Not Found';
	res.setHeader('Content-Type', 'application/json');
	res.write(JSON.stringify(error));
	res.end();
};