const connection = require('../config/database');
const { getAllUser, getUser, updateUserById } = require('../service/CRUDservice');


const getHomePage = async (req, res) => {
    // Process Data
    // Call Model
    let results = await getAllUser();
    // console.log('>>> Check Result: ', results);
    return res.render('home.ejs', {
        listUsers: results // listUsers <- results
    });
}

const getCreatePage = (req, res) => {
    return res.render('create.ejs');
}

const postCreateUser = async (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let { email, name, city } = req.body; // Destructuring để lấy nhanh dữ liệu từ request body

    if (!email || !name || !city) {
        return res.status(400).send('Vui lòng nhập đầy đủ thông tin: Email, Tên và Thành phố!');
    }
    console.log(`>>> Email : ${email} || Name : ${name} || City : ${city}`);

    // Thay đổi từ CallBack -> ES7 Async Await
    const [results, fields] = await connection.query('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city],);
    console.log('>>> Check Result: ', results);
    res.redirect('/'); // (Redirect) Tự động chuyển hướng
}

const getEditPage = async (req, res) => {
    const userId = req.params.id;       // Lấy id từ URL, VD: /edit/5 -> id = 5
    const user = await getUser(userId); // Gọi Service lấy thông tin user theo id
    if (!user) {
        return res.status(404).send('Không tìm thấy người dùng!');
    }
    return res.render('edit.ejs', { user: user }); // Render form, đổ dữ liệu user vào
}

const postEditUser = async (req, res) => {
    let { id, email, name, city } = req.body; // Lấy dữ liệu từ form gửi lên
    await updateUserById(email, name, city, id); // Gọi Service để UPDATE trong DB
    return res.redirect('/'); // Sửa xong quay về trang chủ
}



// Giống với require của PHP - Nhưng phải chủ động cấu hình (khai báo)
module.exports = {
    getHomePage,
    getCreatePage,
    postCreateUser,
    getEditPage,
    postEditUser
}