const express = require('express');
const router = express.Router();
const control = require('../control/auth_control')

router.get('/login',control.GetLogin);
router.get('/singup',control.GetSingup);
router.post('/singup',control.PostSingup);
router.post('/login',control.PostLogin);
router.get('/dashboard',control.Dashboard)
router.get('/home',control.Home);
router.get('/logout',control.Logout);

module.exports = router;