import express from 'express'

import DecksController from './controller'

const router = express.Router()

/* GET all decks */
router.get('/', DecksController.getAll)

/* POST new deck */
router.post('/', DecksController.post)

export default router
