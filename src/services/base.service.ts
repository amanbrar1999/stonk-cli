import * as dotenv from "dotenv";
import { createConnection } from "mysql2/promise";
dotenv.config();

export const connect = async () => {
    return createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        port: Number(process.env.PORT)
    });
}

export const listAsValues = (arr: string[]) => {
    return '(' + arr.map(el => `'${el}'`).join(",") + ')';
}
