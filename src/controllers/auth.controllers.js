import jwt from 'jsonwebtoken';
import config from '../config';

import User from '../models/User';

export const login = async (req, res) => {
    const { email, password } = req.body;

    const check_user = await User.findOne({ email });
    if (!check_user) return res.status(400).json({ message: 'Datos incorrectos' });

    const check_password = await User.comparePassword(password, check_user.password);
    if (!check_password) return res.status(400).json({ message: 'Datos incorrectos' });

    const token = jwt.sign({ id: check_user._id }, config.SECRET, { expiresIn: 86400 });

    res.status(200).json({
        message: 'Accedió correctamente',
        token,
        user: {
            id: check_user._id,
            name: check_user.name,
            email: check_user.email,
            avatar: check_user.avatar,
            ip_address: check_user.ip_address,
            country: check_user.country,
            registered: check_user.registered
        }
    });
}

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ message: 'Por favor llene todos los campos' });

    const check_user = await User.findOne({ email });
    if (check_user) return res.status(400).json({ message: 'El usuario ya existe' });

    const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const country = req.headers['x-country-code'];
    
    const user = await User({
        username,
        email,
        password: await User.encryptPassword(password),
        ip_address,
        country
    });
    await user.save();

    res.status(200).json({ message: 'Registro exitoso' });
}