const mysql = require('mysql')

const poolconnection  = mysql.createPool({
    connectionLimit: 10,
    host            : '162.214.80.49',
    user            : 'qjzcohmy_apoorv',
    password        : 'apoorv@123',
    database        : 'qjzcohmy_jossa',
    waitForConnections: true,
    queueLimit: 0
    
})

module.exports=poolconnection;