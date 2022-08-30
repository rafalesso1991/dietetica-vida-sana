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
exports.profile = exports.login = exports.signup = void 0;
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
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //get req body
    //get user pass email
    const newUser = Object.assign({}, req.body);
    //si no existe ya devolver 200
    //si el usuario tiene menos de 4 characteres marcar fallo
    //si la contraseña no tiene 8 caracteres marcar fallo
    // Validation
    const { error } = (0, joi_1.signupValidation)(newUser);
    if (error)
        return res.status(400).json(error.message);
    //si existe devolver error correspondiente
    // Email Validation
    const isEmailExist = yield newUser.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({ error: 'El email ya está registrado' });
    }
    ;
    //enviar mail de verificacion (opcional)
    //encrypt password
    const salt = yield bcryptjs_1.default.genSalt(10);
    newUser.password = yield bcryptjs_1.default.hash(newUser.password, salt);
    //guardar valor en base de datos
    const connection = yield (0, mysql_1.connect)();
    yield connection.query('INSERT INTO users SET ?', [newUser]);
    res.json({
        message: 'Usuario registrado con éxito'
    });
    return res.status(200);
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=auth.controller.js.map