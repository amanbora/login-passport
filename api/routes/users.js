const express = require('express');
const router = express.Router();

router.get('/register', (req,res,next)=>{
        res.status(200).json({
            msg : 'Handling new user requests to /users'
        });
        res.render('register');
});


router.get('/login', (req,res,next)=>{
    res.status(200).json({
        msg : 'Handling old user requests to /users'
    });
    res.render('login');
});

module.exports = router;