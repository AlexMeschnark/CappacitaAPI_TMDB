const knex = require('knex')
const databaseConfig = require('./knexfile')

const databaseConection = knex(databaseConfig)

module.exports = { databaseConection }