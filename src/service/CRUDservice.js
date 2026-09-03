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

module.exports = {
    getAllUser,
    getUser,
    updateUserById,
    createNewUser
}