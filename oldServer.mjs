// import express from 'express';
// import helmet from "helmet";
// import cors from 'cors'
// import dotenv from 'dotenv';
// import morgan from 'morgan'
//
//
//
// // ----- Middlewares Imports
// import rateLimiter from "./middleware/rateLimiter.js";
// import { jwtVerify } from "./middleware/middleware.mjs";
// import notFound from "./routes/notFound/notFound.mjs";
// import healthCheck from "./lib/health/healthChecker.mjs";
//
//
// // ----- Import Routes
// // import { home, products, notFound, user, register, login } from './controllers/userRoutes.mjs'
// import userRoutes from "./routes/user/userRoutes.mjs";
// import emailRoutes from "./routes/email/emailRoutes.mjs";
//
//
// const base = express()
//
// dotenv.config()
// base.use(helmet())
// base.use(morgan('com'))
// base.use(cors({ origin: 'https://domain.com' }));
// // base.use()  // Use a Logger for Server Activity
//
//
//
// //  Verify JWT & Users
// base.use(jwtVerify)  // JWT Verify
//
//
// // ----- Middleware Here
// base.use(express.json())  // Use JSON Data
// base.use(rateLimiter)     // Limit request from Same API
//
//
// // ----- External Routing
// base.use('/user', userRoutes);
// base.use('/email', emailRoutes)
// // base.use('/home', home);
// // base.use('/product', auth,  products) // Auth Middleware Used Here
// // base.use('/register', register);
// // base.use('/login', login);
//
//
//
// // ----- End of all Routes, Health Check, Not Found Pages & Error Page
//
// base.use('/health', healthCheck);
//
// base.use((err, req, res, next) => {
//
//     // Alert or Mail Your Developer That We Found One Error
//
//     console.error('Error: - ', err.message);
//     res.status(500).send({ error: 'Invalid Request' });
// });
//
//
//
// const PORT = process.env.PORT || 4000;
// base.listen( PORT, () => {
//     console.log(`Server running on PORT : ${PORT}`);
// });
