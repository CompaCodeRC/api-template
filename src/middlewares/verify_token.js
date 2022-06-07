import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

const verify_token = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({ message: "No se encontro el token" });

        const decode_token = jwt.verify(token, config.SECRET);
        req.userId = decode_token.id;

        const user = await User.findById(req.userId, {password: 0});
        if (!user) return res.status(404).json({ message: "No se encontro el usuario" });

        next();
    } catch (err) {
        return res.status(401).json({message: "No autorizado"})
    }
}

export default verify_token;