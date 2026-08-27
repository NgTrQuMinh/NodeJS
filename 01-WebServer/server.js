const { createServer } = require('node:http'); // 1. Lấy công cụ tạo server từ thư viện Node.js

const hostname = '127.0.0.1'; // 2. Đặt địa chỉ máy chủ (đây là máy tính của bạn)
const port = 3000;           // 3. Đặt cổng kết nối (giống như số nhà để vào)

// 4. Tạo ra một máy chủ mới
// req: Nhận thông tin người dùng gửi lên | res: Gửi phản hồi của bạn về cho họ
const server = createServer((req, res) => {
    res.statusCode = 200;                        // 5. Báo cho trình duyệt: "Mọi thứ OK, thành công!"
    res.setHeader('Content-Type', 'text/plain'); // 6. Báo cho trình duyệt: "Dữ liệu trả về chỉ là chữ thô"
    res.end('Hello World\nNgTrQuMinhc');         // 7. Gửi chữ này ra màn hình và kết thúc phiên làm việc
});

// 8. Bật máy chủ lên để bắt đầu chờ người dùng truy cập
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); // 9. In ra màn hình dòng chữ thông báo máy chủ đã chạy
});
