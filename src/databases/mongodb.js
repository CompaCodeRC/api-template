import mongoose from 'mongoose';
import config from '../config';

const check_mongo = process.env.PORT ? '127.0.0.1' : 'db';

mongoose.connect(`mongodb://${check_mongo}/${config.MONGODB}`)
    .then(db => console.log('DB connected'))
    .catch(err => console.error(err));