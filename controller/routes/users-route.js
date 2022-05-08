'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

let user;
const users = router
	.get('/users', async (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('users', { layouts: 'main-quarternary' });
	})
	.post('/users', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
export default users;
