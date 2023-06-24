var jwt = require('jsonwebtoken');

module.exports.generateToken = (id) => {
    console.log(id);
    return jwt.sign(id, process.env.JWT_SEC_KEY, { expiresIn: '7days' });
}
