const express = require('express');
const router = express.Router();
const authcontroller = require('../controller/authcontroller');

router.get('/register',authcontroller.getRegister);
router.post('/register',authcontroller.postRegister);
router.get('/login',authcontroller.getLogin);
router.post('/login',authcontroller.postLogin);

module.exports = router;