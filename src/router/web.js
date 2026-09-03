const express = require('express');
const { getHomePage, getCreatePage, postCreateUser, getEditPage, postEditUser } = require('../controller/homeController');
const router = express.Router();

/**
 * KHAI BÁO CÁC ROUTER (ĐỊNH TUYẾN)
 * router.Method('/router', handler)
 */
router.get('/', getHomePage);

router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser); // file xử lý CreateUser

router.get('/edit/:id', getEditPage);
router.post('/update-user', postEditUser); // file xử lý EditUser



module.exports = router; // export default