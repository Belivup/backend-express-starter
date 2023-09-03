import express from "express";
import { uploadImage } from "./_controllers/uploadImage.mjs";

import uploadFiles from "../../../lib/multer/uploadFiles.mjs";

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Dashboard")
} )

router.post('/', uploadFiles.single('image'), uploadImage )


export default router
