const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohassan0607@gmail.com',
        subject: 'Welcome to Task App',
        text: `Welcome ${name}, i hope you like the app`
    }).then(() => {
        console.log('sent')
    }).catch((e) => {
        console.log(e.response.body)
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohassan0607@gmail.com',
        subject: 'Sorry for Leaving',
        text: `Hi ${name}, we want to know why are you leaving`
    }).then(() => {
        console.log('sent')
    }).catch((e) => {
        console.log(e.response.body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}