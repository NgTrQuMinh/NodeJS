// Bài 7: Xử lý lỗi(try/catch/throw)
// Yêu cầu:
// Viết hàm parseJSON(str) nhận vào một chuỗi JSON, dùng JSON.parse để chuyển thành object.
// Nếu chuỗi không hợp lệ, bắt lỗi và in ra thông báo "Dữ liệu không đúng định dạng JSON".
// Nếu chuỗi hợp lệ, trả về object.
// Kiểm tra với '{"name":"An","age":25}' và 'not a json'.


function parseJSON(str) {
    try {
        return JSON.parse(str);
    } catch (error) {
        console.log("Dữ liệu không đúng định dạng JSON");
        // console.log(error);
        return null;
    }
}

// Test 1: Chuỗi hợp lệ
const validStr = '{"name":"An","age":25}';
console.log(parseJSON(validStr));
// Kết quả: { name: 'An', age: 25 }

// Test 2: Chuỗi không hợp lệ
const invalidStr = 'not a json';
console.log(parseJSON(invalidStr));
// In ra: Dữ liệu không đúng định dạng JSON
// Kết quả: null
