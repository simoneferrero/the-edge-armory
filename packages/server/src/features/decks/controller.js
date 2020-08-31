import DecksModel from './model'

class DecksController {
  static async getAll(req, res, next) {
    try {
      res.type('application/json')

      const owner = req.user.sub

      const getAllDecks = DecksModel.getAll(owner)
      const [decks] = await res.locals.pool.execute(getAllDecks)

      res.status(200).send(JSON.stringify(decks))
    } catch ({ message }) {
      const response = {
        error: {
          message,
        },
      }
      next(JSON.stringify(response))
    }
  }

  static async post(req, res, next) {
    try {
      res.type('application/json')

      const { body, user } = req
      const { name, faction } = body
      const owner = user.sub

      const postDeck = DecksModel.post({ owner, name, faction })
      const [{ insertId }] = await res.locals.pool.execute(postDeck)

      const getDeck = DecksModel.get(owner, insertId)
      const [[newDeck]] = await res.locals.pool.execute(getDeck)

      res.status(200).send(JSON.stringify(newDeck))
    } catch ({ message }) {
      const response = {
        error: {
          message,
        },
      }
      next(JSON.stringify(response))
    }
  }
}

export default DecksController
