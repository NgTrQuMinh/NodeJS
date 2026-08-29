const connection = require('../config/database');

const getHomePage = (req, res) => {
    // Process Data
    // Call Model
    return res.render('home.ejs');
}

const getNgTrQuMinh = (req, res) => {
    res.render('sample.ejs');
}


// Giống với require của PHP
module.exports = {
    getHomePage, getNgTrQuMinh
}