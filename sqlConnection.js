const sql = require('mssql');

const config = {
    user: '', // Add your SQL server username here
    password: '', // Add your SQL server password here
    database: '', //db name
    server: '',
    options: {
        enableArithAbort: true,
        encrypt: false
    },
    pool: {
        max: 500
    }
};

async function testConnection() {
    try {
        await sql.connect(config);
        console.log('Connection successful!');
    } catch (err) {
        console.error('Connection failed: ', err);
    }
}

testConnection();
