import mongoose from 'mongoose';
import config from '../config';

mongoose.connect('mongodb://localhost/'+config.MONGODB)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));