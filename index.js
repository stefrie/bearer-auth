'use strict';

const server = require('./src/server.js');
const PORT = process.env.PORT;

// Start up DB Server
const { db } = require('./src/auth/models/index.js');

db.sync()
	.then(() => {
		server.start(PORT);
	});

