import express from "express";

import dashboardRoutes from "./dashboard/dashboardRoutes.mjs";

const router = express.Router()

import userAuth from "../../middleware/userAuth.mjs";


import { createUserValidate } from "./validator/createUser.mjs";
import {createUser} from "./controllers/createUser.mjs";
import {getUser} from "./controllers/getUser.mjs";

router.use('/', userAuth )  // all routes apply
router.use('/dashboard', dashboardRoutes )


// base.all('/user/*', apiAuth) // all  user Child route will apply

router.get('/', createUserValidate, createUser)
router.get('/:user', getUser)




export default router
