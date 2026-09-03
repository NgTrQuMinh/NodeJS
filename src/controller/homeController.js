const connection = require('../config/database');
const { getAllUser, getUser, updateUserById, createNewUser, deleteUser } = require('../service/CRUDservice');

// HomePage -> SELECT * FROM User
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

// CREATE -> CRUD
const postCreateUser = async (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let { email, name, city } = req.body; // Destructuring để lấy nhanh dữ liệu từ request body

    if (!email || !name || !city) {
        return res.status(400).send('Vui lòng nhập đầy đủ thông tin: Email, Tên và Thành phố!');
    }
    console.log(`>>> Email : ${email} || Name : ${name} || City : ${city}`);

    await createNewUser(email, name, city);
    return res.redirect('/');
}

// READ -> CRUD
const getReadPage = async (req, res) => {
    const userId = req.params.id;
    const user = await getUser(userId);
    if (!user) {
        return res.status(404).send('Không tìm thấy người dùng!');
    }
    return res.render('read.ejs', { user: user }); // Render form, đổ dữ liệu user vào 
}

// Edit Update -> CRUD
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

const postDeleteUser = async (req, res) => {
    const userID = req.params.id; 
    // console.log(">>>> check userID nhận được:", userID);
    // console.log("Dữ liệu trên URL Params:", req.params);
    const user = await deleteUser(userID);
    return res.redirect('/'); 
}



// Giống với require của PHP - Nhưng phải chủ động cấu hình (khai báo)
module.exports = {
    // HomePage
    getHomePage,

    // CreatePage
    getCreatePage,
    postCreateUser,

    // ReadPage
    getReadPage,

    // EditPage - UpdatePage
    getEditPage,
    postEditUser,

    // DeletePage
    postDeleteUser
}

/* 
*** Trong Node.js (Express), req.body và req.params được phân biệt ngắn gọn như sau:req.body (Dữ liệu ẩn): 
Chứa dữ liệu gửi ngầm trong thân (body) của request.
- Ví dụ: Gửi chuỗi JSON { "username": "admin", "pass": "123" } lên server.

*** req.params (Dữ liệu trên URL): Chứa các biến động nằm trực tiếp trên đường dẫn URL, khai báo bằng dấu hai chấm :. 
Thường dùng để định danh một đối tượng cụ thể (GET, DELETE).

- Ví dụ: Với URL /users/5, nếu route là /users/:id thì req.params.id sẽ bằng 5.
*/