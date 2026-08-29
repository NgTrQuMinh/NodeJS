const connection = require('../config/database');

const getHomePage = (req, res) => {
    // Process Data
    // Call Model
    let users = [];
    connection.query(
        'SELECT * FROM Users u',
        function (err, result, fields) {
            if (err) {
                console.error('>>> Lỗi truy vấn: ', err);
                return;
            }
            users = result;
            console.log('>>>Result Home Page = ', result);
            res.send(JSON.stringify(result));
        }
    );
}

const getNgTrQuMinh = (req, res) => {
    res.render('sample.ejs');
}


// Giống với require của PHP
module.exports = {
    getHomePage, getNgTrQuMinh
}