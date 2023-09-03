import prisma from "../../../../prisma/prisma.mjs";


export const uploadImage = async ( req, res) => {

    console.log(req.body)
    const imageBuffer = req.file.buffer
    const buffer = imageBuffer.toString('base64')
    const save = await prisma.account.create({
        data: req.isValid
    })
    res.send("Upload Images")
}




