const errorCatcher = require('./../helper/errorCatcher');
const AppError = require('./../helper/appError');
const constants = require('../constants/constants');

const isAuthenticated = async (req, res, next) => {
    const { app } = req;

    const { authService } = app.get('services');

    const authResponse = await authService.isAuthenticated(req);
    if (authResponse.status == '200') {
        const _id = authResponse.data.data[0]._id;
        const user = { _id };
        req.user = user;
        next();
    } else {
        next(new AppError(constants.AUTHTOKEN_ERROR, 401));
    }
};

module.exports = {
    isAuthenticated: errorCatcher(isAuthenticated)
}