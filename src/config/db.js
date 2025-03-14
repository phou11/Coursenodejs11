import mysql from "mysql";
const connected = mysql.createPool({
    // connectionLimit: 50,
    host:"localhost",
    // queueLimit: 0,
    // waitForConnections: true,
    user:"root",
    // password:PASSWORD_DATABASE,
    // port:PORT_DATABASE,
    database:"CourseNodejsDB11",
    timezone:'z'
});

connected.getConnection((err) => {
    if (err) throw err
    console.log(`Connected Database`);
})

export default connected