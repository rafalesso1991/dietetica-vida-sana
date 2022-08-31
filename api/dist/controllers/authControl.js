"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.login = exports.signup = exports.getUsers = void 0;
// Password encrypt
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// DB
const mysql_1 = require("../db/mysql");
// Validation
const joi_1 = require("../utils/joi");
// export const encrypPassword = async (password: string): Promise<string> => {
//     const salt = await bcrypt.genSalt(10);
//     return bcrypt.hash(password, salt);
// };
// export const validatePassword = async function (id: int, password: string): Promise<boolean> {
//     return await bcrypt.compare(password, query.password);
// };
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield (0, mysql_1.connect)();
            const users = yield connection.query('SELECT * FROM users;');
            return res.json(users[0]);
        }
        catch (error) {
            console.log(error);
        }
        ;
    });
}
exports.getUsers = getUsers;
;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = Object.assign({}, req.body);
    // Validation
    const { error } = (0, joi_1.signupValidation)(newUser);
    if (error)
        return res.status(400).json(error.message);
    // Connection
    const connection = yield (0, mysql_1.connect)();
    // if (connection) return res.status(500).json('Conexion a la BBDD exitosa');
    // Email Validation
    const repeated_e = yield connection.query('SELECT email FROM users WHERE email = ?', [newUser.email]);
    if (!(repeated_e[0].toString() == "")) {
        return res.status(400).json({ error: 'El email ya está registrado' });
    }
    ;
    // Send verification mail (pending...)
    // Encrypt password
    const salt = yield bcryptjs_1.default.genSalt(10);
    newUser.password = yield bcryptjs_1.default.hash(newUser.password, salt);
    // Saving a new User
    yield connection.query('INSERT INTO users SET ?', [newUser]);
    res.json({ message: 'Usuario registrado con éxito' });
    return res.status(200).json({ message: 'Usuario registrado con éxito' });
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = Object.assign({}, req.body);
    // Validation
    const { error } = (0, joi_1.signinValidation)(newUser);
    if (error)
        return res.status(400).json(error.message);
    // Connection
    const connection = yield (0, mysql_1.connect)();
    // if (connection) return res.status(500).json('Conexion a la BBDD exitosa');
    // Email Validation
    const user = yield connection.query('SELECT email FROM users WHERE email = ?', [newUser.email]);
    if (!(user[0].toString() == "")) {
        return res.status(400).json({ error: 'El email ya está registrado' });
    }
    ;
    // Create a Token
    // const token: string = jwt.sign({ _id: user._id }, process.env['TOKEN_SECRET'] || '');
    // res.header('auth-token', token).json(token);
    //get req body
    //check if user exists
    //check if passwords match
    //generate jwt and update database
    //return jwt
    //return error 400
});
exports.login = login;
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //get req body
    //check jwt
    //return user info
    //return auth error
});
exports.profile = profile;
//# sourceMappingURL=authControl.js.map