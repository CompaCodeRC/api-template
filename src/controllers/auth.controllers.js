import jwt from 'jsonwebtoken';
import config from '../config';

import User from '../models/User';

export const login = async (req, res) => {
    const { email, password } = req.body;

    const check_user = await User.findOne({ email });
    if (!check_user) return res.status(400).json({ message: 'User not found' });

    const check_password = await User.comparePassword(password, check_user.password);
    if (!check_password) return res.status(400).json({ message: 'Password is incorrect' });

    const token = jwt.sign({ id: check_user._id }, config.SECRET, { expiresIn: 86400 });

    res.status(200).json({
        message: 'Login success',
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
    if (!username || !email || !password) return res.status(400).json({ message: 'Please fill all fields' });

    const check_user = await User.findOne({ email });
    if (check_user) return res.status(400).json({ message: 'User already exists' });

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

    res.status(200).json({ message: 'Register success' });
}