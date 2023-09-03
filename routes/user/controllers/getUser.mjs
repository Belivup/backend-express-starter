import prisma from "../../../prisma/prisma.mjs";

export const getUser = async (req, res) => {

    const { user } = req.isValid

    try{
        const getUser = await prisma.prismauser.findFirst({
            where:{ user : user }
        })

        if (!getUser){
            return res.status(400).send("no User Found")
        }

        res.send(getUser)

    } catch (err){
        res.send(err)
    }
}
