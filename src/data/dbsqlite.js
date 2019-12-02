import sqlite3 from 'sqlite3'
import Sequelize from 'sequelize'
export const create = new Sequelize('test', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // SQLite only
    storage: './database.sqlite'
});

export const User = Sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});


export const syncUser = User.sync({ force: true }).then(function() {

    return User.create({
        firstName: 'Danish',
        lastName: 'ALi'
    });
});

export const start = function() {
    create()
    User()
    syncUser()

}