module.exports = function(roles) {
    return function(req, res, next) {
        // Your role verification logic here
        next();
    };
};
