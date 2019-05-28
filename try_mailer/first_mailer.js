const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mymaildumpp@gmail.com',
        pass: '#Mymaildumpp11'
    }
});

var mailOptions = {
    from: 'mymaildumpp@gmail.com',
    to: 'cybergitt@gmail.com',
    subject: 'Sending Email using Node.js',
    // text: 'That was easy!',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    // it worked!
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});