export MJ_APIKEY_PUBLIC='73098aba62ed23503c72ad28e4d3ac4c'
export MJ_APIKEY_PRIVATE='b71cbd507ba7ef650a29cee6d7342380'

*/
const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
)
const request = mailjet.post('send', { version: 'v3.1' }).request({
  Messages: [
    {
      From: {
        Email: 'pilot@mailjet.com',
        Name: 'Mailjet Pilot',
      },
      To: [
        {
          Email: 'passenger1@mailjet.com',
          Name: 'passenger 1',
        },
      ],
      TemplateID: 1,
      TemplateLanguage: true,
      Subject: 'Your email flight plan!',
    },
  ],
})
request
  .then(result => {
    console.log(result.body)
  })
  .catch(err => {
    console.log(err.statusCode)
  })