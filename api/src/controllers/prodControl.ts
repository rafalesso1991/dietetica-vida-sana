import { Request, Response } from 'express';
// DB
import { connect } from '../db/mysql';
// Interface
import { IProduct } from '../models/productModel';
// METHODS
// GET All Products
export async function getProducts(req: Request, res: Response): Promise<Response | void> {
    try {
        const connection = await connect();
        const products = await connection.query('SELECT * FROM products');
        return res.json(products[0]);
    }
    catch (error) {
        console.log(error)
    };
};
// GET Product by ID
export async function getProduct(req: Request, res: Response) {
    const id = req.params.postId;
    const connection = await connect();
    const products = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    res.json(products[0]);
};
// CREATE New Product
export async function createProduct(req: Request, res: Response) {
    const newProduct: IProduct = req.body;
    const connection = await connect();
    await connection.query('INSERT INTO products SET ?', [newProduct]);
    res.json({
        message: 'Se ha creado un nuevo Producto'
    });
}
// UPDATE Product by ID
export async function updateProduct(req: Request, res: Response) {
    const id = req.params.id;
    const updateProduct: IProduct = req.body;
    const connection = await connect();
    await connection.query('UPDATE products set ? WHERE id = ?', [updateProduct, id]);
    res.json({
        message: 'Producto actualizado'
    });
};
// DELETE Product by ID
export async function deleteProduct(req: Request, res: Response) {
    const id = req.params.id;
    const connection = await connect();
    await connection.query('DELETE FROM products WHERE id = ?', [id]);
    res.json({
        message: 'Producto eliminado'
    });
};