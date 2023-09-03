App.js

    import express from 'express';
    
    // Middlewares
    // import { validator } from "./middleware.mjs";
    
    // Import Routes
    import login from "./routes/user.mjs";
    import home from "./routes/home.mjs";
    import notFound from "./routes/notFound.mjs";

    const app = express();
    app.use(express.json());
    

    // External Routing
    app.use('/home', home);
    app.use('/login', login);


    // End of all Routes,
    // Not Found Pages, Make Sure to Rate Limit
    app.use('*', notFound);
     
    
    app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    });
