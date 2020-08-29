import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  console.log(req.user.sub) // use as user id
  res.json('Welcome to The Edge Armory API')
})

export default router
