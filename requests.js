const axios = require('axios')


function processQuote(quote) {
  const newQuote = quote.split(" ")
  .map(w => `7${w}7`)
  .join(" ")

  console.log(newQuote)
}

console.log("before")
axios.get("https://api.kanye.rest")
.then(result => {
  const quote = result.data.quote
  processQuote(quote)
  return axios.get("https://api.kanye.rest")
})
.then(result => {
  console.log(result.data)
})
.catch(error => {
  console.log(error.message)
})
console.log("after")