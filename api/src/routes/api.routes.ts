import { Router } from 'express';
const router = Router();

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/prodControl'

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/create', createProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;