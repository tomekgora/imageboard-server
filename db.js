const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:<password>@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)
db.sync()
    .then(() => console.log("Database is up.")
    .catch(err => console.error(err))
);

module.exports = db

