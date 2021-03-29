

const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
)
const request = mailjet.post('send', { version: 'v3.1' }).request({
  Messages: [
    {
      From: {
        Email: ,
        Name: name,
      },
      To: [
        {
          Email: 'passenger1@mailjet.com',
          Name: 'passenger 1',
        },
      ],
      TemplateID: 2715595,
      TemplateLanguage: true,
      Subject: 'Welcome to Flat-ping'
    },
  ],
  "SandboxMode":true
})
request
  .then(result => {
    console.log(result.body)
  })
  .catch(err => {
    console.log(err.statusCode)
  })