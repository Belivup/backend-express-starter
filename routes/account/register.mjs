import express from "express";
import prisma from "../../lib/prisma/prisma.mjs";

const router = express.Router()

router.post('/', async (req, res) => {

    const { username, email, password } = req.body

    try {
        const createUser = await prisma.account.create({
            data: {
                email, username, password
            }
        })
        res.send(createUser)

    } catch (err){
        res.send(err.message)
    }


})


export default router
