import app from './app';
import './databases/mongodb';

import config from './config';
app.listen(config.PORT);

console.log(`Server running on port ${config.PORT}`);