const express = require("express");
const createError  = require("http-errors");
const router = express.Router();
const User = require("./../Models/User.model");

router.post('/register', async(req, res, next) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) throw createError.BadRequest("Email or Password Missing");

        const userExists = await User.findOne({email: email});

        if(userExists) throw createError.Conflict(`${email} already exists`);

        const user = new User({
            email,
            password,
            username: email,
            created_at: new Date().getTime()
        });
        const storeUser = await user.save();

        res.send(storeUser);
    } catch (error) {
        next(error);
    }
});

router.post('/login', async(req, res, next) => {
    res.send("login Route");
});

router.post('/refresh-token', async(req, res, next) => {
    res.send("Refresh Token Route");
});

router.delete('/logout', async(req, res, next) => {
    res.send("Logout Route");
});

module.exports = router;