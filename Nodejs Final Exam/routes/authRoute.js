const express = require('express');

const routes = express.Router();

const { registerPage, loginPage, registerUser, loginUser, logoutUser, addPage, viewPage, addData } = require('../Controller/authController');

const passport = require('passport');

routes.get('/register', registerPage);
routes.get('/', loginPage); 
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.post('/registeruser', registerUser);
routes.get('/logoutuser', logoutUser);
routes.get('/addPage', addPage);
routes.get('/viewPage',passport.checkUser, viewPage);
routes.post('/addData', addData);

module.exports = routes;