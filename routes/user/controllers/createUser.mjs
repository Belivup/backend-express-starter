import prisma from "../../../prisma/prisma.mjs";


export const createUser = async (req, res) => {

    try{
        const createUser = await prisma.account.create({
            data : req.isValid
        })

        res.send(createUser)

    } catch (err){
        res.send(err)
    }
}
