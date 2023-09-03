Not Found Page

    import express from "express";
        
    const router = express.Router()
        
    router.all("*", (req, res) => {
        res.status(404).json({message : "Invalid Endpoint Requested" })
    })
        
    export default router
