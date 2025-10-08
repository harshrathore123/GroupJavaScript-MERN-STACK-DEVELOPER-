const express = require('express');
const router = express.Router();
const controller = require('../control/authController.js')

router.get('/login',controller.GetLogin);
router.get('/signup',controller.GetSingup);
router.post('/signup',controller.PostSingup);
router.post('/login',controller.PostLogin);
router.get('/home',controller.Home);
router.get('/dashboard',controller.Dashboard);
router.get('/logout',controller.Logout);
module.exports = router;