'use strict';

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
	path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

export default {
	NODE_ENV: process.env.NODE_ENV || 'development',
	HOST: process.env.HOST || '127.0.0.1:',
	PORT: process.env.PORT || 9080,
	DATABASE_URL:
		process.env.DATABASE_URL ||
		'mongodb+srv://webe-site-admin:mat2819@sandbox.glrio.mongodb.net/webe_blog?retryWrites=true&w=majority'
};
