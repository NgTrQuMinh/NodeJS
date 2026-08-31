const connection = require('../config/database');

const getHomePage = (req, res) => {
    // Process Data
    // Call Model
    return res.render('home.ejs');
}

const getNgTrQuMinh = (req, res) => {
    res.render('sample.ejs');
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


// Giống với require của PHP - Nhưng phải chủ động cấu hình (khai báo)
module.exports = {
    getHomePage, getNgTrQuMinh, getCreatePage, postCreateUser
}