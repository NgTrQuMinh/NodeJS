const express = require('express');
const { getHomePage, getNgTrQuMinh } = require('../controller/homeController');
const router = express.Router();

/**
 * KHAI BÁO CÁC ROUTER (ĐỊNH TUYẾN)
 * router.Method('/router', handler)
 */
router.get('/', getHomePage)
router.get('/ngtrquminh', getNgTrQuMinh)

module.exports = router; // export default