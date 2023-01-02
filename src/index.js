import app from './app';
import './databases/mongodb';

import config from './config';
app.listen(config.PORT);

console.log(`Servidor iniciado en el puerto: ${config.PORT}`);