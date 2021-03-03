// export MJ_APIKEY_PUBLIC='your API key'
// export MJ_APIKEY_PRIVATE='your API secret'


const mailjet = require ('node-mailjet')
.connect('73098aba62ed23503c72ad28e4d3ac4c', 'b71cbd507ba7ef650a29cee6d7342380')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "alfredwang0707@gmail.com",
        "Name": "Alfred"
      },
      "To": [
        {
          "Email": "alfredwang0707@gmail.com",
          "Name": "Alfred"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })