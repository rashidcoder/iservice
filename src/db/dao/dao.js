"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _db_1 = require("../config/_db");
const User_1 = require("../models/User");
const sequelize_1 = require("sequelize");
function create(user) {
    User_1.User.init({
        title: sequelize_1.STRING,
        description: sequelize_1.STRING
    }, { sequelize: _db_1.default, modelName: 'User' });
    User_1.User.create(user);
    User_1.User.sync();
    return null;
}
exports.create = create;
function findAll() {
    return User_1.User
        .findAll();
}
exports.findAll = findAll;
