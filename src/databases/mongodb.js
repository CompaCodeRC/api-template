import mongoose from 'mongoose';
import config from '../config';

mongoose.connect('mongodb://localhost/'+config.MONGODB)
    .then(db => console.log('DB connected'))
    .catch(err => console.error(err));