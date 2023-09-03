import express from "express";
import prisma from "../../prisma/prisma.mjs";

const router = express.Router()

router.post('/', async (req, res ) => {

    const {email, password} = req.body

    console.log(email)

    if (email) {
        const user = await prisma.account.findFirst({
            where : {
                AND : [
                    {email}, {password}
                ]
            }
        })
        return res.send(user)
    }

    res.send({message: "No User"})

})

export default router
