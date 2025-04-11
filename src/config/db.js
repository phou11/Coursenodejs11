// import mysql from "mysql";
// const connected = mysql.createPool({
//     // connectionLimit: 50,
//     host:"localhost",
//     // queueLimit: 0,
//     // waitForConnections: true,
//     user:"root",
//     // password:PASSWORD_DATABASE,
//     // port:PORT_DATABASE,
//     database:"CourseNodejsDB11",
//     timezone:'z'
// });

// connected.getConnection((err) => {
//     if (err) throw err
//     console.log(`Connected Database`);
// })

// export default connected

import mysql from "mysql";
import { URL_DATABASE, PASSWORD_DATABASE, PORT_DATABASE, USER_DATABASE, DATABASE_NAME } from "./globalkey.js";
const connected = mysql.createPool({
    connectionLimit: 0,
    host: `mysql-195488-0.cloudclusters.net`,
    queueLimit: 0,
    waitForConnections: true,
    user: `admin`,
    password: `vH8WhQiM`,
    port: `10007`,
    database: `CourseNodejsDB11`,
    timezone: 'z'
});

connected.getConnection((err) => {
    if (err) throw err
    console.log(`Connected Database`);


});

export default connected;