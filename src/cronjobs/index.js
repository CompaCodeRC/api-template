import cron from 'node-cron';
import DemoCron from './DemoCron';

cron.schedule('0 0 */1 * *', DemoCron);

//cron cada 5 minutos: */5 * * * *
//cron cada 1 hora: 0 */1 * * *
//cron cada 1 dia: 0 0 */1 * *
//cron cada 1 semana: 0 0 * * 0