"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
;
const TokenValidation = (req, res, next) => {
    try {
        const token = req.header('token');
        if (!token)
            return res.status(401).json('Acceso denegado');
        const payload = jsonwebtoken_1.default.verify(token, process.env['TOKEN_SECRET'] || '');
        req.body.id = payload._id;
        next();
    }
    catch (error) {
        res.status(400).send('Token de seguridad inválido');
    }
    ;
};
exports.TokenValidation = TokenValidation;
//# sourceMappingURL=verifyToken.js.map