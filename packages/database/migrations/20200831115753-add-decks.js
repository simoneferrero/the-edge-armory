const executeSql = require('../helpers/executeSql')

const migrationName = '20200831115753-add-decks'

exports.up = (db, callback) => {
  return executeSql(`${migrationName}-up`, db, callback)
}

exports.down = (db, callback) => {
  return executeSql(`${migrationName}-down`, db, callback)
}

exports._meta = {
  version: 1,
}
