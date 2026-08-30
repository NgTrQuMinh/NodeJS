// import express from 'express'; // es modules
const express = require('express'); // commenJS
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./router/web');

require('dotenv').config(); // npm install dotenv --save
// or import 'dotenv/config' // for esm

const app = express(); // khởi tạo express = app -> quản lý toàn bộ server.
const port = process.env.PORT || 8888;  // cổng => hardcode . uat .prod
const hostname = process.env.HOST_NAME;


app.use(express.urlencoded({ extended: true })); // Cấu hình  để đọc dữ liệu từ Form HTML
app.use(express.json()); // Cấu hình để đọc dữ liệu dạng JSON (nếu gửi bằng Fetch/Axios)

// Config
configViewEngine(app);

// Router
app.use('/', webRouter);


/**
 * KHỞI ĐỘNG SERVER
 */
// Ra lệnh cho server bắt đầu "lắng nghe" các yêu cầu gửi đến cổng 3000
app.listen(port, hostname, () => {
    console.log(`Ứng dụng được chạy trên cổng ${port}`);
})