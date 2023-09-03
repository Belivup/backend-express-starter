import express from "express";
import prisma from "../../prisma/prisma.mjs";
const router = express.Router()


router.get('/', (req, res) => {
    res.send({message : "send all Products"})
})

router.post('/', (req, res) => {
    res.send({message : "Create Product"})
})


export default router
