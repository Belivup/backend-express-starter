import userRoutes from "../routes/user/userRoutes.mjs";
import emailRoutes from "../routes/email/emailRoutes.mjs";
import accountRoutes from "../routes/account/login.mjs";
import validatorLogin from "../routes/account/validator.mjs";
import ecomRoutes from "../routes/ecom/ecomRoutes.mjs";
import classRoutes from "../routes/class/classRoutes.mjs";


export default function useRouter(app) {


    app.use('/user', userRoutes);
    app.use('/email', emailRoutes);
    app.use('/account', validatorLogin, accountRoutes)
    app.use('/ecom', ecomRoutes)

    // base.use('/product', auth,  products) // Auth Middleware Used Here
    // base.use('/register', register);
    // base.use('/login', login);
    app.use('/class', classRoutes)
    app.use('/', home);

}

const home = (req, res) => {
    res.status(200).send({message : "Hello World Home"})
}
