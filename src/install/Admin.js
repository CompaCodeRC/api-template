import User from '../models/User';

export default async () => {
    const check_admin = await User.findOne({ role: 'admin' });
    if (!check_admin) {
        await User.create({ 
            username: 'Admin',
            email: 'admin@demo.com',
            password: await User.encryptPassword('nhQjiWCdASOM74Q4mX6Soxn46ujhjXsW'),
            role: 'admin'
        });

        console.log('Cuenta de administrador creado');
    }
}