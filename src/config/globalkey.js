// import dotenv from "dotenv";
// dotenv.config();
// const PORT = process.env.PORT;
// const URL_DATABASE = process.env.URL_DATABASE;
// const USER_DATABSE = process.env.USER_DATABSE;
// const DATABSE_NAME = process.env.DATABSE_NAME;
// const SECREATE_KEY = process.env.SECREATE_KEY;
// const SECREATE_KEY_REFRESH = process.env.SECREATE_KEY_REFRESH;

// export {
//     PORT, URL_DATABASE, USER_DATABSE, DATABSE_NAME, SECREATE_KEY, SECREATE_KEY_REFRESH,
// };
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const URL_DATABASE = process.env.URL_DATABASE;
const USER_DATABASE = process.env.USER_DATABASE;
const PASSWORD_DATABASE = process.env.PASSWORD_DATABASE;
const DATABASE_NAME = process.env.DATABASE_NAME;
const PORT_DATABASE = process.env.PORT_DATABASE;

const SECREATE_KEY = process.env.SECREATE_KEY;
const SECREATE_KEY_REFRESH = process.env.SECREATE_KEY_REFRESH;

export {
  PORT,
  URL_DATABASE,
  USER_DATABASE,
  PASSWORD_DATABASE,
  DATABASE_NAME,
  PORT_DATABASE,
  SECREATE_KEY,
  SECREATE_KEY_REFRESH,
};
