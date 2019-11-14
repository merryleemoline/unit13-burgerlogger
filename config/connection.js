var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8888,
  user: "root",
  password: "root",
  database: "burgers_db"
});

const connectionPromise = new Promise((resolve, reject) => {
    connection.connect(function (err) {
        if (err) {
            return reject(err);
        };
        resolve(connection);
    });
});

function getConnection() {
    return connectionPromise;
}

module.exports = {
    getConnection
};
