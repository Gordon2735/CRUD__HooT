'use strict';

import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
	username: String,
	mail: String,
	psw: String,
	repsw: String,
	rememberme: Boolean,
	createdAt: { type: Date, default: Date.now }
});
