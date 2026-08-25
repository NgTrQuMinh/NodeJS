// Bài 4: Object và Destructuring
// Yêu cầu:
// Cho đối tượng student:
// javascript
const student = {
    name: 'Minh',
    age: 22,
    address: {
        city: 'Hà Nội',
        district: 'Cầu Giấy',
    },
    subjects: ['Toán', 'Lý', 'Hóa'],
};
// Sử dụng destructuring để lấy name, age, và city (trong address).
// Đổi tên biến city thành studentCity.
// Dùng spread operator để tạo đối tượng newStudent từ student, cập nhật age lên 23 và thêm môn 'Anh' vào mảng subjects (lưu ý không làm thay đổi mảng gốc).
// In ra đối tượng mới.

console.log(student);
const { name, age, address: { city : studentCity } } = student;

const newStudent = {
    ...student,
    age: 23,
    address: { city : studentCity },
    subjects: [...student.subjects, 'Anh']
};

console.log(newStudent);