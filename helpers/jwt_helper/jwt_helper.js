const JWT = require("jsonwebtoken");
const createError = require("http-errors");

module.exports = {

    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {
                aud: userId
            };
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: "1h",
                issuer: "http://127.0.0.1:3000"
            };

            JWT.sign(payload, secret, options, (err, token) => {
                if(err) reject(err)
                resolve(token);
            });
        });
    }

};