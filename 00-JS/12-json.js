// Bài 12: JSON và lưu trữ dữ liệu
// Yêu cầu:

// Cho object config:

// javascript
const config = {
    port: 3000,
    host: 'localhost',
    db: { user: 'admin', password: '123456' },
};

// Chuyển object này thành chuỗi JSON.
const jsonString = JSON.stringify(config);

// Lưu chuỗi JSON vào một biến.
console.log(jsonString);

// Parse lại thành object và thay đổi port thành 8080, sau đó in ra object mới.
const parsedConfig = JSON.parse(jsonString);
parsedConfig.port = 8080;
console.log(parsedConfig);