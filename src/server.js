// import express from 'express'; // es modules
const express = require('express'); // commenJS
const path = require('path');

const app = express(); // khởi tạo express = app -> quản lý toàn bộ server.
const port = 3000;  // cổng

/**
 * CẤU HÌNH TEMPLATE ENGINE (EJS)
 * Lưu ý: Bạn cần chạy lệnh `npm install ejs` trong terminal trước khi dùng.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * KHAI BÁO CÁC ROUTER (ĐỊNH TUYẾN)
 */
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/ngtrquminh', (req, res) => {
    res.send('Hello ngtrquminh!');
})
app.get('/ejs', (req, res) => {
    res.render('sample.ejs');
})

/**
 * KHỞI ĐỘNG SERVER
 */
// Ra lệnh cho server bắt đầu "lắng nghe" các yêu cầu gửi đến cổng 3000
app.listen(port, () => {
    console.log(`Ứng dụng được chạy trên cổng ${port}`);
})