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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
// DB
const mysql_1 = require("../db/mysql");
// METHODS
// GET All Products
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield (0, mysql_1.connect)();
            const products = yield connection.query('SELECT * FROM products');
            return res.json(products[0]);
        }
        catch (error) {
            console.log(error);
        }
        ;
    });
}
exports.getProducts = getProducts;
;
// GET Product by ID
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const connection = yield (0, mysql_1.connect)();
        const products = yield connection.query('SELECT * FROM products WHERE id = ?', [id]);
        res.json(products[0]);
    });
}
exports.getProduct = getProduct;
;
// CREATE New Product
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newProduct = req.body;
        const connection = yield (0, mysql_1.connect)();
        yield connection.query('INSERT INTO products SET ?', [newProduct]);
        res.json({
            message: 'Se ha creado un nuevo Producto'
        });
    });
}
exports.createProduct = createProduct;
// UPDATE Product by ID
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updateProduct = req.body;
        const connection = yield (0, mysql_1.connect)();
        yield connection.query('UPDATE products set ? WHERE id = ?', [updateProduct, id]);
        res.json({
            message: 'Producto actualizado'
        });
    });
}
exports.updateProduct = updateProduct;
;
// DELETE Product by ID
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const connection = yield (0, mysql_1.connect)();
        yield connection.query('DELETE FROM products WHERE id = ?', [id]);
        res.json({
            message: 'Producto eliminado'
        });
    });
}
exports.deleteProduct = deleteProduct;
;
//# sourceMappingURL=prodControl.js.map