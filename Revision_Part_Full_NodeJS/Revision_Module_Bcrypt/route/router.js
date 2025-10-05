const express = require('express');
const router = express.Router();
const authcontroller = require('../controller/control');

router.get('/login',authcontroller.getLogin);
router.get('/register',authcontroller.getSingup);
router.post('/register',authcontroller.postSingup);
router.post('/login',authcontroller.postLogin);

module.exports = router;