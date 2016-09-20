/**
 * Created by eranda on 9/20/16.
 */

module.exports = {
    connection: function () {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'eranda',
            password: 'password'
        });

        connection.connect();
        return connection;
    }
};
