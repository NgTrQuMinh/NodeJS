const express = require('express');
const { getHomePage, getNgTrQuMinh, getCreatePage, postCreateUser } = require('../controller/homeController');
const router = express.Router();

/**
 * KHAI BÁO CÁC ROUTER (ĐỊNH TUYẾN)
 * router.Method('/router', handler)
 */
router.get('/', getHomePage);
router.get('/ngtrquminh', getNgTrQuMinh);
router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser); // file xử lý


module.exports = router; // export default