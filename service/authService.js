const webService = require('./webService');
const ServiceBuilder = require('./serviceBuilder');

class AuthService extends ServiceBuilder {
    constructor() {
        super('authService');
    }

    async isAuthenticated(req) {
        const url = `${this.serviceAddress}/auth`;
        const method = 'POST';
        const headers = req.headers;
        const cookies = req.cookies;

        const response =  await webService({
            url,
            method,
            headers,
            cookies
        });
        return response;
    };
}

module.exports = AuthService;