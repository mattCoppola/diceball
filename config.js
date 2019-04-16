'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://admin:web123@ds139946.mlab.com:39946/diceball-db';

exports.PORT = process.env.PORT || 8080;
