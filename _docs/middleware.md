Middleware Page

    app.use('/login', auth, login);

OR 

    router.get('/', auth, async (req, res) => {
        ....
    }

And

    export function auth(req, res, next) {
    
        const isAuthenticated = false;
    
        if (isAuthenticated) {
            next();
        } else {
            res.status(401).send({ message: "You are not authorized" });
        }
    }
