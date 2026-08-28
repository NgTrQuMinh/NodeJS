const getHomePage = (req, res) => {
    // Process Data
    // Call Model
    res.send('Hello World!');
}

const getNgTrQuMinh = (req, res) => {
    res.render('sample.ejs');
}


// Giống với require của PHP
module.exports = {
    getHomePage, getNgTrQuMinh
}