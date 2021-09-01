const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'js-live-assestment',
    port: 5555
});

connection.connect();

function getAll(tableName) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM employees', [tableName], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports.getAll = getAll;
