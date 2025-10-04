const express = require('express');
const router = express.Router();
const control = require('../controller/control');

router.get('/register',control.getSignup);
router.get('/login',control.getLogin);
router.post('/login',control.postLogin);
router.post('/register',control.postSingup);
router.get('/dashboard',control.Dashboard);
router.get('/logout',control.Logout);
router.get('/home',control.Home)

module.exports=router;
