const axios = require('axios');

/**
 * @param {*} params 
 * params needs to be an object with method, url, data, headers etc
 * @returns 
 */

const presetHeaders = {
    'Content-Type': 'application/json',
    'request-origin': 'userService',
};

const webService = async (params) => {
    const {
        method = 'GET',
        url,
        data = {},
        headers = {},
        cookies = {}
    } = params;

    const headersToBeSent = {
        ...presetHeaders,
        ...headers,
    };

    return await axios({
        method,
        url,
        data,
        cookies,
        headers: headersToBeSent,
    });
}

module.exports = webService;