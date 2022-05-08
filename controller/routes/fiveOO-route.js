'use strict';

import express from 'express';
const router = express.Router();

const fiveOO = router.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.render('500', (error, code) => {
		console.error(
			`${error},  There was an Error: PAGE NOT FOUND,
            with the following Error Code: ${code}`
		);
	});
	res.status(500);
});
export default fiveOO;
