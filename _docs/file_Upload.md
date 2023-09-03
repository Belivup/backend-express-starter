upload.mjs

    import multer from 'multer'
    const upload = multer({ storage : multer.memoryStorage() })
    export default upload


routes.mjs

    import upload from "../../../middleware/uploadFiles.mjs";

    router.post('/', upload.single('image'), uploadImage )

controller 

    const imageBuffer = req.file.buffer
    const imageBase64 = imageBuffer.toString('base64')
