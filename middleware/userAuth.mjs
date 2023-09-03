const userAuth = (req, res, next) => {

    const isAuth = true

    if (isAuth){
        next()
    } else {
        res.status(401).send({ message: "Auth Failed" });
    }
}

export default userAuth
