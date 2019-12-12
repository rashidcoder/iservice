const Sequelize = require('sequelize');
class Database {
    constructor() {

    }

    db = () => {
        console.log('get is called')
        return new Sequelize({
            dialect: "sqlite",
            storage: "./database.sqlite"
        });
    }
}

module.exports = { Database }