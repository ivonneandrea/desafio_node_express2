import pg from "pg";
import {db} from "../config.js";

export const pool = new pg.Pool(db);

try {
    await pool.query("SELECT NOW()");
    console.log("Base de Datos conectada");
} catch (error) {
    console.log(error);
}

export default pool;