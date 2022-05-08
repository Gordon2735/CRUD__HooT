'use strict';

import express from 'express';
import home from './routes/home-route.js';
import about from './routes/about-route.js';
import users from './routes/users-route.js';
import create_user from './routes/create_user-route.js';
import contact_us from './routes/contact_us-route.js';
import blog_home from './routes/blog_home-route.js';
import blog_user from './routes/blog_user-route.js';
import fiveOO from './routes/fiveOO-route.js';
import fourOfour from './routes/fourOfour-route.js';

const router = express.Router();
router.use(express.static('./routes'));

router.use('/', home);
router.use('/', about);
router.use('/', users);
router.use('/', create_user);
router.use('/', contact_us);
router.use('/', blog_home);
router.use('/', blog_user);
router.use('/', fiveOO);
router.use('/', fourOfour);

export default router;
