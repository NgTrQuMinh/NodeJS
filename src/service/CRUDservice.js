const connection = require('../config/database');

const getAllUser = async () => {
    const [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const getUser = async (id) => {
    // dùng dấu '?' thay vì ':id' vì mysql2 mặc định KHÔNG hỗ trợ named placeholder
    const [results, fields] = await connection.execute('SELECT * FROM Users WHERE id = ?', [id]);
    return results[0] || null;
}

const updateUserById = async (email, name, city, id) => {
    const [results, fields] = await connection.query(
        'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',
        [email, name, city, id]
    );
    return results;
}

const createNewUser = async (email, name, city) => {
    const [results, fields] = await connection.query('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, name, city]);
    return results;
}

const deleteUser = async (id) => {
    const [results, fields] = await connection.execute('DELETE FROM Users WHERE id = ?', [id]);
    return results.affectedRows > 0; // Nếu affectedRows > 0 nghĩa là đã xóa thành công ít nhất 1 hàng
}

module.exports = {
    getAllUser,
    getUser,
    updateUserById,
    createNewUser,
    deleteUser
}

/*
*** Nên dùng execute cho các câu lệnh có chứa dữ liệu từ người dùng để chống tấn công SQL Injection, 
và dùng query cho các câu lệnh tĩnh hoặc thao tác không cần truyền tham số.

- Nên dùng execute khi:Truy vấn có chứa dữ liệu người dùng (req.body, req.params, req.query).
Thực hiện các thao tác SELECT, INSERT, UPDATE, DELETE với các tham số truyền vào qua mảng [values]

- Nên dùng query khi:Câu lệnh SQL hoàn toàn tĩnh, không có tham số động từ bên ngoài (ví dụ: SELECT * FROM settings).
Chạy các đoạn mã khởi tạo cơ sở dữ liệu hoặc cấu hình hệ thống nhiều câu lệnh cùng lúc.
*/