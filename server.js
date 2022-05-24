'use strict';

import config from './config/config.js';
import express from 'express';
import mongoose from 'mongoose';
import { create } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { EventEmitter } from 'events';
import logEvents from './logEvents.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import open from 'open';
import router from './controller/router.js';
import fs from 'fs';

function instantiateConfig() {
	`NODE_ENV=${config.NODE_ENV}`;
}
instantiateConfig();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using String Interpolation
const dbURI = `${config.DATABASE_URL}`;
// console.log(typeof dbURI); had to use "String Interpolation"
// of JavaScript's powerful and communicative 'Template Literals'
// to convert the dbURI variable to a string.
mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const mongooseConnection = mongoose.connection;
mongooseConnection
	.on('open', () => {
		console.log('Connected to MongoDB');
	})
	.on('close', () => {
		console.log('Disconnected from MongoDB');
	})
	.on('error', error => {
		console.log('Error connecting to MongoDB', error);
	});

const handlebars = create({
	extname: '.handlebars',
	defaultView: 'default',
	defaultLayout: 'main',
	layouts: ['main', 'main-secondary', 'main-tertiary', 'main-quarternary'],
	layoutsDir: path.join(__dirname, 'views', 'layouts'),
	partialsDir: path.join(__dirname, 'views', 'partials'),
	helpersDir: path.join(__dirname, 'views', 'helpers')
});

app.set('views', './views');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);
app.enable('view cache');

app.use(express.static('controller'));
app.use('/', router);
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public/src/img', 'favicon.ico')));
app.use(express.static('models/'));

app.use((req, res, next) => {
	res.status(404).send();
	next();
});
app.use((req, res, next) => {
	res.status(500).send();
	next();
});

app.get('/state', (req, res) => {
	res.sendFile('components.js', {
		root: '/state/library/'
	});
	res.set('Content-Type', 'text/javascript');
});
app.get('/state', (req, res) => {
	res.sendFile('pubsub.js', {
		root: '/state/library/'
	});
	res.set('Content-Type', 'text/javascript');
});
app.get('/state', (req, res) => {
	res.sendFile('store.js', {
		root: '/state/store/'
	});
	res.set('Content-Type', 'text/javascript');
});
app.get('/404', (req, res) => {
	res.sendFile('404.handlebars', {
		root: __dirname + '/views/'
	});
	res.set('Content-Type', 'text/html');
});
app.get('/500', (req, res) => {
	res.sendFile('500.handlebars', {
		root: __dirname + '/views/'
	});
	res.set('Content-Type', 'text/html');
});

router.use((req, res, next) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});

app.listen(config.PORT, () => {
	console.info(
		`Nodemon Server listening on localhost ${config.HOST}${config.PORT}`
	);
});

const openBrowser = async () => {
	await open(`${config.HOST}${config.PORT}`, {
		app: { name: open.apps.chrome }
	}).catch((error, code) => {
		console.error(error, code);
	});
};
openBrowser();

class TrackEmitter extends EventEmitter {}
const trackEmitter = new TrackEmitter();
trackEmitter.on('log', message => {
	logEvents(message);
});
setTimeout(() => {
	trackEmitter.emit('log', 'Nodemon Server Log "EVENT EMITTED"');
	console.log(new Date());
});

// Create a write stream (in append mode)(morgan)
const accessLogStream = fs.createWriteStream(
	path.join(__dirname, 'logs', 'access.log'),
	{ flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));
app.get('/', (req, res) => {
	res.send('HOOT Webelistics Logger Tracker');
});
