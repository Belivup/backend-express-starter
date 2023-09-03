import express from "express";
const router = express.Router()

import classController from "./controller/class.mjs";

router.get('/', classController.getUser )
router.post('/', classController.createUser )
router.put('/', classController.updateUser )
router.delete('/', classController.deleteUser)


export default router
