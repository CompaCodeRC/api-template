import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

const VerifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) return res.status(403).json({ message: "Usuario desconocido" });

        const decode_token = jwt.verify(token, config.SECRET);

        const user_db = await User.findById(decode_token.id, {password: 0});
        if (!user_db) return res.status(404).json({ message: "Usuario desconocido" });
        res.locals.user = user_db;

        next();
    } catch (err) {
        return res.status(401).json({message: "No autorizado"})
    }
}

export default VerifyToken;