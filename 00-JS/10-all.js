// Bài 10: Tổng hợp(kết hợp nhiều kỹ năng)
// Yêu cầu:
// Viết chương trình quản lý danh sách sinh viên với các chức năng sau(sử dụng array methods, destructuring, arrow functions, async / await…):

// Mảng students ban đầu:

// javascript
const students = [
    { id: 1, name: 'Lan', age: 20, scores: [8, 9, 7] },
    { id: 2, name: 'Hùng', age: 22, scores: [6, 7, 8] },
    { id: 3, name: 'Mai', age: 19, scores: [9, 9, 10] },
];
// Viết hàm calculateAverage(student) tính điểm trung bình của một sinh viên.
function calculateAverage(student) {
    if (!student.scores || student.scores.length === 0) return 0;
    const sum = student.scores.reduce((total, score) => total + score, 0);
    return sum / student.scores.length;
}
console.log(calculateAverage(students[0]));

// Dùng map tạo mảng mới chứa tên và điểm trung bình của từng sinh viên.
const studentAverage = students.map(item => {
    return {
        name: item.name,
        average: calculateAverage(item)
    }
})
console.log(studentAverage);


// Dùng filter lọc ra sinh viên có điểm trung bình >= 8.
function studentFilter(student) {
    return student.filter(item => {
        return calculateAverage(item) >= 8;
    })
}
console.log(studentFilter(students));


// Dùng find tìm sinh viên có tên 'Mai'.
function studentFindName(student, searchName) {
    const studentFind = student.find(item => {
        return String(item.name) === searchName;
    })
    return studentFind ? studentFind : 404;
}

console.log(studentFindName(students, 'Mai'));


// Sắp xếp danh sách theo tuổi giảm dần.
function maxToMin(student) {
    return student.sort((a, b) => b.age - a.age);
}

console.log(maxToMin(students));

// Viết hàm addStudent(newStudent)(dùng spread để thêm vào mảng cũ) và trả về mảng mới.
function addStudent(students, newStudent) {
    return [...students, newStudent];
}

console.log(students, { id: 1, name: 'Minh', age: 19, scores: [10, 10, 10] });

// Viết hàm updateStudent(id, newData) sử dụng spread để cập nhật thông tin một sinh viên(không thay đổi mảng gốc).
function updateStudent(students, id, newData) {
    return students.map(student =>
        // id === id => một đối tượng mới sẽ được tạo ra bằng toán tử Spread (...)
        // ...student: Sao chép toàn bộ thông tin cũ của sinh viên đó sang đối tượng mới.
        // ...newData: Sao chép các thông tin mới vào. Nếu thông tin mới có thuộc tính trùng tên với thông tin cũ (ví dụ cùng có thuộc tính age), giá trị mới sẽ đè lên (ghi đè) giá trị cũ.
        student.id === id ? { ...student, ...newData } : student 
    );
}

// toán tử Spread (...) có một quy tắc cốt lõi: Thuộc tính nào xuất hiện sau sẽ ghi đè lên thuộc tính xuất hiện trước nếu chúng trùng tên.
const updatedData = { age: 30, scores: [9, 10, 10] };
const newStudents = updateStudent(students, 2, updatedData);
console.log("Mảng mới sau khi cập nhật:", newStudents);
console.log("Mảng gốc (không bị thay đổi):", students);