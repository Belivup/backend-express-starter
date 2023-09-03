import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from 'morgan';
import cors from 'cors';

export default function useConfig(app) {
    dotenv.config();
    app.use(helmet());
    app.use(morgan('common')); //  common, dev, combined
    // app.use(cors({ origin: 'https://domain.com' }));
    // base.use()  // Use a Logger for Server Activity
}
