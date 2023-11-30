import mysql from "mysql2/promise"
require('dotenv').config();


     /*직접 연결
    const connection = await mysql.createConnection({
        host: 'your_mysql_host',
        user: 'your_mysql_user',
        password: 'your_mysql_password',
        database: 'your_mysql_database',
    });
  
    export default connection;
    */

    /* 커넥션 풀을 사용해서 연결 
     장점 
     1. 여러 연결을 관리하고 재사용 : 성능향상
     2. 일정한 개수의 연결을 미리 만들어 놓고 필요할때 사용 :리소스 효율
     3. 동시에 여러 사용자의 요청을 효과적을 처리 : 동시성 관리
     */
 const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
 })

 export default pool;