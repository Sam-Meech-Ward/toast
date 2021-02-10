const axios = require('axios')

function processQuote(quote) {
  const newQuote = quote.split(" ")
  .map(w => `7${w}7`)
  .join(" ")

  console.log(newQuote)
}

console.log("before")

;(async () => {
  try {
    const result = await axios.get("https://api.kanye.rest")
    const quote = result.data.quote
    processQuote(quote)
    const result2 = await axios.get("https://api.kanye.rest")
    console.log(result2.data)
  } catch(error) {
    console.log(error)
  }
})()

console.log("after")