import express from 'express';
import Product from '../models/Product.js';
import fetchUser from '../middleware/Fetchuser.js';
import expressValidator from 'express-validator';
import adminOnly from '../middleware/Admin.js';

const { body, validationResult } = expressValidator;
const router = express.Router();

// create
router.post('/createProduct', fetchUser, adminOnly, [
    body('title').isLength({ min: 2 }),
    body('description').isLength({ min: 2 }),
    body('price').isNumeric(),
    body('category').isLength({ min: 2 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, price, category } = req.body;
        let img = req.files.map(e => {
            return e.filename
        })

        const prod = await Product.create({
            title,
            description,
            price,
            category,
            img
        })

        res.json({ success: true, prod })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
})

// read
router.get('/getProducts', async (req, res) => {
    try {
        const products = await Product.find()
        res.json({ success: true, products })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
})

// update 
router.put('/updateProduct/:id', fetchUser, adminOnly, [
    body('title').optional().isLength({ min: 2 }),
    body('description').optional().isLength({ min: 2 }),
    body('price').optional().isNumeric(),
    body('category').optional().isLength({ min: 2 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, price, category } = req.body;

        const newProd = {}
        if (title) newProd.title = title;
        if (description) newProd.description = description;
        if (price) newProd.price = price;
        if (category) newProd.category = category;

        let prod = await Product.findById(req.params.id)
        if (!prod) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        prod = await Product.findByIdAndUpdate(req.params.id, { $set: newProd }, { new: true })
        res.json({ success: true, prod })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
})


// delete
router.delete('/deleteProduct/:id', fetchUser, adminOnly, async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        product = await Product.findByIdAndDelete(req.params.id)
        res.json({ success: true, message: "Product has been deleted", product })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
})

export default router;