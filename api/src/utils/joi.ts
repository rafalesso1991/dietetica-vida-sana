import Joi from '@hapi/joi';
import {IUser} from '../models/userModel'

export const signupValidation = (data: IUser) => {
    const userInterface = Joi.object({
        username: Joi
            .string()
            .min(4)
            .max(30)
            .required(),
        email: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .min(6)
            .required()
    });
    return userInterface.validate(data);
};

export const signinValidation = (data: IUser) => {
    const userInterface = Joi.object({
        email: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .min(6)
            .required()
    });
    return userInterface.validate(data);
};