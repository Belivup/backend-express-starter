    www.belivup.com/product?id=1

App

    app.use('/product', product)

Product:ID Params

    import express from 'express';
    
    const router = express.Router();

    router.get('/', async (req, res) => {
    const productId = req.query.id
    
        if (isNaN(productId)) {
            return res.status(400).json({ error: "ID must be a number" });
        }
    
        res.json({ ProductID: productId })
    })
    
    
    export default router;
