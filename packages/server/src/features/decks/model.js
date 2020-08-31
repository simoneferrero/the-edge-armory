import sql from 'sql-bricks'

const DECKS = 'decks'

class DecksModel {
  static getAll(owner) {
    return sql.select().from(DECKS).where({ owner }).toString()
  }

  static get(owner, id) {
    return sql.select().from(DECKS).where({ owner, id }).toString()
  }

  static post(values) {
    return sql.insert(DECKS, values).toString()
  }
}

export default DecksModel
