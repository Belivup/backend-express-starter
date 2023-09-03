import jwt from 'jsonwebtoken'

import prisma from "../prisma/prisma.mjs";

const jwtVerify = async (req, res, next) => {

    return next()

    // Verify JWT Here, Find user ID

    // Check User ID using Prisma
    // const user = await prisma.user.findUnique({
    //     where: {id : "userID"}
    // })

    // if (user) {
    //     req.user = user
    //     return next()
    // }

    res.send("You are not authorized")
}

export default jwtVerify
