'use strict';

import express from 'express';
const router = express.Router();

const fourOfour = router.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.render('404', (error, code) => {
		console.error(
			`${error},  There was an Error: PAGE NOT FOUND,
            with the following Error Code: ${code}`
		);
	});
	res.status(404);
});
export default fourOfour;
