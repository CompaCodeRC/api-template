import fs from "fs";

export default async function LocalData() {
    if (!fs.existsSync('./src/database/local_data')) {
        fs.mkdirSync('./src/database/local_data');
    }
    
    if (!fs.existsSync('./src/database/local_data/prices.json')) {
        fs.writeFileSync('./src/database/local_data/prices.json', '[]');
    }

    if (!fs.existsSync('./src/database/local_data/ticker.json')) {
        fs.writeFileSync('./src/database/local_data/ticker.json', '[]');
    }
};