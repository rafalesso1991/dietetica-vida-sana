"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
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
const router = (0, express_1.Router)();
const authControl_1 = require("../controllers/authControl");
router.get('/', authControl_1.getUsers);
router.get('/signin', authControl_1.login);
router.get('/profile', authControl_1.profile);
router.post('/signup', authControl_1.signup);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map