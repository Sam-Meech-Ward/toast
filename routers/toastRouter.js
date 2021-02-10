const express = require('express')

module.exports = function({database}) {
  
  const router = express.Router()

  router.get('/', async (req, res) => {
    const toasts = await database.getToasts()
    res.send({
      total: toasts.length,
      toasts,
    })
  })
  
  router.get('/:id', async (req, res) => {
    const id = +req.params.id
    const toast = await database.getToast({toastId: id})
    res.send({toast})
  })
  
  
  router.post('/', async (req, res) => {
    const { breadType, spread, burnt } = req.body
    const toast = await database.createToast({ breadType, spread, burnt })
    res.send({toast})
  })
  
  return router
}

