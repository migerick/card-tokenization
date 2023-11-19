import mysql from 'mysql';
import tokenizationConfig from '../config/config';

const env = tokenizationConfig;

const {mysqlUrl} = env;

const conMysql = mysql.createConnection(mysqlUrl);

conMysql.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

// Handling disconnection
conMysql.end((err) => {
    if (err) {
        console.error('Error disconnecting from MySQL:', err);
        return;
    }
    console.log('Disconnected from MySQL!');
});

export default conMysql;
