import multer from 'multer';
import path from 'path';

const destinations = {
    'avatar': 'src/public/users/avatar',
    'voucher': 'src/public/users/voucher',
    'unknowns': 'src/public/users/unknowns'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const field = file.fieldname;
        const destination = destinations[field] || destinations['unknowns'];
        cb(null, destination);
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '_' + uniqueSuffix + ext);
    }
});

const UpDisk = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
            return cb('Formato Invalido');
        }
        cb(null, true);
    },
});

export default UpDisk;