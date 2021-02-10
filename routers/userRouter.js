const express = require('express')

module.exports = function({database}) {
  
  const router = express.Router()

  router.post('/login', async (req, res) => {
    const { username, password } = req.body

    try {
      const user = await database.getUser({ username, password })

      res.send({
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      })
    } catch(error) {
      console.error(error)
      res.send({error: error.message})
    }
  })
  
  router.post('/', async (req, res) => {
    const { username, password, email } = req.body
    const user = await database.createUser({ username, password, email })

    res.send({
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    })
  })
  
  return router
}

