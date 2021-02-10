const express = require('express')
const makeToastRouter = require('./routers/toastRouter')
const makeUserRouter = require('./routers/userRouter')
const database = require('./fakeDatabase')

const app = express()
app.use(express.json())

const toastRouter = makeToastRouter({database})
app.use("/api/toasts", toastRouter)

const userRouter = makeUserRouter({database})
app.use("/api/users", userRouter)

const port = process.env.PORT || 7777
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})