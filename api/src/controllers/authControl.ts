import { Request, Response } from 'express'
// Password encrypt
import bcrypt from 'bcryptjs';
// Security Token
import jwt from 'jsonwebtoken';

// DB
import { connect } from '../db/mysql';
// Interface
import { IUser } from '../models/userModel'
// Validation
import { signupValidation, signinValidation } from '../utils/joi'

// export const encrypPassword = async (password: string): Promise<string> => {
//     const salt = await bcrypt.genSalt(10);
//     return bcrypt.hash(password, salt);
// };

// export const validatePassword = async function (id: int, password: string): Promise<boolean> {

//     return await bcrypt.compare(password, query.password);
// };


export async function getUsers(req: Request, res: Response): Promise<Response | void> {
    try {
        const connection = await connect();
        const users = await connection.query('SELECT * FROM users;');
        return res.json(users[0]);
    }
    catch (error) {
        console.log(error)
    };
};


export const signup = async (req: Request, res: Response) => {
    //get req body
    //get user pass email
    const newUser: IUser = {...req.body};

    //si no existe ya devolver 200
    //si el usuario tiene menos de 4 characteres marcar fallo
    //si la contraseña no tiene 8 caracteres marcar fallo
    // Validation
    const { error } = signupValidation(newUser);
    if (error) return res.status(400).json(error.message);

    const connection = await connect();
    // if(NO SE CONECTO) {
    //     return res.status(500)
    // }

    const repeated_u = await connection.query('SELECT username FROM users WHERE username = ?', [newUser.username]);
    if (!(repeated_u[0].toString() == "" )){
        return res.status(400).json({error: 'El username ya está registrado'});
    }

    //si existe devolver error correspondiente
    // Email Validation
    const repeated_e = await connection.query('SELECT email FROM users WHERE email = ?', [newUser.email]);
    if (!(repeated_e[0].toString() == "")){
        return res.status(400).json({error: 'El email ya está registrado'});
    }

                                //enviar mail de verificacion (opcional)

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    //guardar valor en base de datos
    await connection.query('INSERT INTO users SET ?', [newUser]);
    res.json({
        message: 'Usuario registrado con éxito'
    });
    
    return res.status(200)
};

export const login = async (req: Request, res: Response) => {
    //get req body
    //check if user exists
    //check if passwords match
        //generate jwt and update database
        //return jwt
    
        //return error 400

};

export const profile = async (req: Request, res: Response) => {
    //get req body
    //check jwt
        //return user info

        //return auth error
};