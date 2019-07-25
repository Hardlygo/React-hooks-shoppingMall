'use strict';

const Service = require('egg').Service;

class ToolsService extends Service {
    async setToken(userToken) {
        return this.app.jwt.sign(userToken, this.app.config.secret, {expiresIn: '30s'})
    }
}

module.exports = ToolsService;