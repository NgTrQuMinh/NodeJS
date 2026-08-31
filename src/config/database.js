const mysql = require('mysql2/promise'); // Tiêu diệt "Callback Hell" -> Kết hợp Async/Await
require('dotenv').config(); // npm install dotenv --save

// npm install --save mysql2 -> Cài đặt Npm Mysql2

/*
*** Cấu hình Connection createConnection
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306, // default: 3306
    user: process.env.DB_USER, // default: empty
    password: process.env.DB_PASSWORLD,
    database: process.env.DB_NAME
});
*/

// Cấu hình Connection Pool -> Tối ưu
const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306, // default: 3306
    user: process.env.DB_USER, // default: empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // Các cấu hình tối ưu hiệu suất cho Pool
    waitForConnections: true,    // Chờ nếu pool hết kết nối trống (true) hay báo lỗi ngay (false)
    connectionLimit: 10,         // Số lượng kết nối tối đa được tạo ra trong pool
    queueLimit: 0,               // Số lượng request tối đa xếp hàng chờ (0 là không giới hạn)
    enableKeepAlive: true,       // Giữ kết nối luôn sống, tránh bị DB tự động ngắt khi treo lâu
    keepAliveInitialDelay: 10000 // Thời gian chờ trước khi gửi gói tin keep-alive (ms)
});

module.exports = connection;
