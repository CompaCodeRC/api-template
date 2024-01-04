const Permissions = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(res.locals.user.role)) {
            return res.status(401).json({ message: "No autorizado" });
        }
        next();
    };
};

export default Permissions;