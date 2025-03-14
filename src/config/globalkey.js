import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const URL_DATABASE = process.env.URL_DATABASE;
const USER_DATABSE = process.env.USER_DATABSE;
const DATABSE_NAME = process.env.DATABSE_NAME;
const SECREATE_KEY = process.env.SECREATE_KEY;
const SECREATE_KEY_REFRESH = process.env.SECREATE_KEY_REFRESH;

export {
    PORT, URL_DATABASE, USER_DATABSE, DATABSE_NAME, SECREATE_KEY, SECREATE_KEY_REFRESH,
};
