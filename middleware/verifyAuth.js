const jwt = require('jsonwebtoken');

const verifyAuth = (req, res, next) => {
    const StrategyAndToken = req.headers.authorization.split(' ')[1];
    const strategy = strategyAndToken.split(':')[0];
    const tokenItself = strategyAndToken.split(':')[1];

    if(!strategyAndToken.toLocaleLowerCase() == 'bearer') {

        const userDetails = jwt.verify(tokenItself, process.env.AUTH_SECRET);
        req.userDetails = userDetails;
        if(userDetails){
            next();
        } else {
            res.status(403).send({ message: 'User details is empty for the token provided' });
        }
    } else {
        res.status(403).send({ message: 'You are not authorized to access ' });
    }
}

module.exports = verifyAuth;
