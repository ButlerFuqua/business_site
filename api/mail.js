// require('dotenv').config() // for env variables

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require('dotenv').config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


module.exports = async (req, res) => {

    const msg = {
        to: process.env.SENDGRID_EMAIL, // Change to your recipient
        from: 'test@example.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            return res.status(200).json({
                success: true,
                message: 'Email sent'
            })
        })
        .catch((error) => {
            console.error(error)
            return res.status(500).json({
                success: false,
                message: `Email NOT sent\n\n\r\r${error.message}`
            })
        })

}
