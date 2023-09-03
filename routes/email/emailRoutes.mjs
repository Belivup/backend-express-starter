import express from "express";
const router = express.Router()

import {sendEmail} from "./_controllers/sendEmail.mjs";


router.get('/', sendEmail)



export default router
