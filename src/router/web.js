const express = require('express');
const { getHomePage, getCreatePage, postCreateUser, getEditPage, postEditUser, getReadPage, postDeleteUser } = require('../controller/homeController');
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

router.get('/read/:id', getReadPage);

router.post('/delete/:id', postDeleteUser); // file xử lý DeleteUser




module.exports = router; // export default