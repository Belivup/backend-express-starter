import express from 'express';
import rateLimiter from "../middleware/rateLimiter.js";
import jwtVerify from "../middleware/jwtVerify.mjs";

export default function useMiddleware(app) {
    // Verify JWT & Users
    // app.use(jwtVerify);  // JWT Verify
    app.use(express.json());  // Use JSON Data
    // app.use(rateLimiter);     // Limit request from Same API
}
