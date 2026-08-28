const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    /**
     * CẤU HÌNH TEMPLATE ENGINE (EJS): views.ejs
     * Lưu ý: Bạn cần chạy lệnh `npm install ejs` trong terminal trước khi dùng.
     */
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    /**
     * CẤU HÌNH STATIC FILES: images/css/js
     */
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;