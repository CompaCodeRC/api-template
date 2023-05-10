import app from './app';
import './databases/mongodb';
import './install';
import './cronjobs';

import config from './config';
console.log('port', process.env.PORT);
const server = app.listen(process.env.PORT || config.PORT, () => {
    console.log('Listening on port:', server.address().port);
});