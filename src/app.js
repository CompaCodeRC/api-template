import express from 'express';
import morgan from 'morgan';
import cors from "cors";

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import generalRoutes from './routes/general.routes';
import adminRoutes from './routes/admin.routes';

const app = express();

const corsOptions = {
    //origin: "http://localhost:3000",
};

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', generalRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

app.use(express.static('./public'));

export default app;