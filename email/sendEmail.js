const nodemailer = require('nodemailer')

async function main () {
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'apikey',
      pass: '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'
    }
  })

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <leonardotobe94@gmail.com>',
    to: 'leonardotobe94@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error)
