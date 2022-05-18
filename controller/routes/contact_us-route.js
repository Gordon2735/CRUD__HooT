'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

let user;
const contact_us = router
	.get('/contact_us', async (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('contact_us', { layouts: 'main_secondary' });
	})
	.post('/contact_us', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
export default contact_us;
