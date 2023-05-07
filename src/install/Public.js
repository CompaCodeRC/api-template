import fs from 'fs';

const structure = [
    { folder: "/public/users/avatar" },
    { folder: "/public/users/voucher" },
    { folder: "/public/users/unknowns" }
]

export default async () => {
    for (const val of structure) {
        //check directory
        if (!fs.existsSync('src' + val.folder)) {
            fs.mkdirSync('src'+val.folder, { recursive: true });
        }
    }
}