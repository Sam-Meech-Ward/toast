const bcrypt = require('bcryptjs')

const toasts = [{
  id: 1, 
  breadType: "multigrain",
  spread: "penut butter",
  burnt: true
}]

const users = []

async function getToasts() {
  return toasts
}
exports.getToasts = getToasts

async function getToast({toastId}) {
  return toasts.find(toast => toast.id === toastId)
}
exports.getToast = getToast

async function createToast({breadType, spread, burnt}) {
  const toast = {
    id: toasts.length + 1,
    breadType, spread, burnt
  }
  toasts.push(toast)
  
  return toast
}
exports.createToast = createToast

async function createUser({ username, password, email }) {

  const hashed = await bcrypt.hash(password, 12)
  password = null

  const user = {
    id: users.length + 1,
    username, 
    password: hashed, 
    email 
  }
  users.push(user)

  console.log(users)
  
  return user
}
exports.createUser = createUser


async function getUser({username, password}) {
  // 1. get the user given the username
  const user = users.find(user => user.username === username)
  if (!user) {
    // handle username being incorrect
    throw Error("incorrect username")
  }

  // 2. verify the password
  const same = await bcrypt.compare(password, user.password)
  if (!same) {
    // handle the password being incorrect
    throw Error("incorrect password")
  }

  return user
}
exports.getUser = getUser

// function getToasts() {
//   return new Promise((resolve, reject) => {
//     resolve(toasts)
//   })
// } 
// exports.getToasts = getToasts