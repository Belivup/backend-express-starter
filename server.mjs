import express from 'express';

import useConfig from './base/useConfig.mjs';
import useMiddleware from './base/useMiddleware.mjs';
import useRouter from './base/useRouter.mjs';

import healthChecker from "./base/healthChecker.mjs";
import errorHandler from "./base/errorHandler.mjs";


const app = express();


useConfig(app)          // Default Config ie. dotenv, helmet, morgan, core
useMiddleware(app)      // Default Middleware ie. json, jwt, rateLimit
useRouter(app)          // External Routes ie

healthChecker(app)          // Basic Health Checking
errorHandler(app)          // Global Error handler


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});
