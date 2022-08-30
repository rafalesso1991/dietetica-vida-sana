"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const prodControl_1 = require("../controllers/prodControl");
router.get('/', prodControl_1.getProducts);
router.get('/:id', prodControl_1.getProduct);
router.post('/create', prodControl_1.createProduct);
router.put('/update/:id', prodControl_1.updateProduct);
router.delete('/delete/:id', prodControl_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=api.routes.js.map