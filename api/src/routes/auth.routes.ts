import { Router, Request, Response, NextFunction } from 'express';
// validation
// import Joi from '@hapi/joi';

// const schemaSignup = Joi.object({
//     name: Joi.string().min(6).max(255).required(),
//     email: Joi.string().min(6).max(255).required().email(),
//     password: Joi.string().min(6).max(255).required()
// })

// const schemaSignin = Joi.object({
//     email: Joi.string().min(6).max(255).required().email(),
//     password: Joi.string().min(6).max(1024).required()
// })

const router = Router();

import { login, profile, signup, getUsers} from '../controllers/authControl'

router.get('/', getUsers);
router.get('/signin', login);
router.get('/profile', profile);
router.post('/signup', signup);

export default router;