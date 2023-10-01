import fs from "fs";

export default async function LocalData() {
    if (!fs.existsSync('./src/databases/local_data')) {
        fs.mkdirSync('./src/databases/local_data');
    }
    
    if (!fs.existsSync('./src/databases/local_data/prices.json')) {
        fs.writeFileSync('./src/databases/local_data/prices.json', '[]');
    }

    if (!fs.existsSync('./src/databases/local_data/ticker.json')) {
        fs.writeFileSync('./src/databases/local_data/ticker.json', '[]');
    }
};