

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