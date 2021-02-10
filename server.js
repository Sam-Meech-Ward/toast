const express = require('express')
const makeToastRouter = require('./routers/toastRouter')
const database = require('./fakeDatabase')

const app = express()
app.use(express.json())

const toastRouter = makeToastRouter({database})
app.use("/toasts", toastRouter)

const port = process.env.PORT || 7777
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})