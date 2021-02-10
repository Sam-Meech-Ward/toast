const toasts = [{
  id: 1, 
  breadType: "multigrain",
  spread: "penut butter",
  burnt: true
}]

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

// function getToasts() {
//   return new Promise((resolve, reject) => {
//     resolve(toasts)
//   })
// } 
// exports.getToasts = getToasts