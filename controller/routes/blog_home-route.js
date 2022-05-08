'use strict';

import express from 'express';

// const app = express();
const router = express.Router();
router.use(express.static('../../views'));

let user;
const blog_home = router
	.get('/blog_home', async (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('blog_home', { layouts: 'main-tertiary' });
	})
	.post('/blog_home', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
// router.use((req, res, next) => {
// 	if (!res.locals.partials) res.locals.partials = {};
// 	next();
// });
export default blog_home;
