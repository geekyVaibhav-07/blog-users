/**
 * document middlewares can be run before and after certain events
 */

const service = require('../service/service');

async function encryptPassword(next) {
    if (this.password) {
        this.password = await service.encryptText(this.password);
        this.confirmPassword = undefined
    }
    next();
}

function removePasswordFromDoc() {
    if (this.password) {
        this.password = undefined
    }
}

module.exports = {
    encryptPassword,
    removePasswordFromDoc
}