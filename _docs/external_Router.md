Route API Endpoint

    import express from 'express';
    
    import { prisma } from '../prisma/prisma.mjs';
    import { auth } from "../middleware.mjs";
    
    const router = express.Router();
    
    
    router.get('/', auth, async (req, res) => {
    
        if (req.query.name && req.query.email) {
            try {
                const user = await prisma.user.create({
                    data: {
                        name: req.query.name,
                        email: req.query.email,
                    },
                });
    
                res.status(200).send(user);
    
            } catch (err) {
                res.send(err);
            }
        } else {
            res.status(200).send({ message: 'Outside' });
        }
    })
    
    
    // home/dashboard Routes

    router.get("/dashboard", async (req, res) => {
    res.json({ message: "Dashboard" })
    })
    
    
    export default router
    


