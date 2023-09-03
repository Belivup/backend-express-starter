import express from 'express';

const router = express.Router();


router.get('/', async (req, res) => {
    res.json({ message: "All Products" })
})

router.get('/:id', async (req, res) => {

    const productId = req.params.id

    if (isNaN(productId)) {
        return res.status(400).json({ error: "ID must be a number" });
    }

    res.json({ ProductID: productId })
})


export { router as products }
