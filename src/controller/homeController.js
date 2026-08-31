const connection = require('../config/database');

const getHomePage = (req, res) => {
    // Process Data
    // Call Model
    return res.render('home.ejs');
}

const getNgTrQuMinh = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let { email, name, city } = req.body; // Destructuring để lấy nhanh dữ liệu từ request body

    if (!email || !name || !city) {
        return res.status(400).send('Vui lòng nhập đầy đủ thông tin: Email, Tên và Thành phố!');
    }
    console.log(`>>> Email : ${email} || Name : ${name} || City : ${city}`);

    connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', // (?) làm biến giữ chỗ để bảo mật
        [email, name, city], // Mảng chứa các giá trị sẽ được nạp vào các dấu (?) theo đúng thứ tự
        // Hàm callback xử lý kết quả
        function (err, results, fields) {
            if (err) {
                console.log("Lỗi chèn dữ liệu: ", err);
                return res.status(500).send('Có lỗi xảy ra khi tạo user');
            }
            res.send('Create a New User Successfully');
            // res.redirect('/users'); // (Redirect) Tự động chuyển hướng
        }
    );
}


// Giống với require của PHP - Nhưng phải chủ động cấu hình (khai báo)
module.exports = {
    getHomePage, getNgTrQuMinh, postCreateUser
}