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
    console.log(req.body); // render data sang dạng JSON
    res.send('Create a New User');
}


// Giống với require của PHP
module.exports = {
    getHomePage, getNgTrQuMinh, postCreateUser
}