exports.index = function (request, response) {
    const nodeMailer = require('nodemailer');

    if (!request.body.name || !request.body.email) {
        response.json({
            success: false,
            reason: "No required fields"
        });
        return console.log("No required fields");
    }

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.G_USER,
            pass: process.env.G_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.G_USER, // sender address
        to: process.env.G_EMAIL, // list of receivers
        subject: request.body.service, // Subject line
        text: JSON.stringify(request.body) // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            response.json({
                success: false,
                reason: "error"
            });
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);

        response.json({
            success: true,
            reason: info.response
        });
    });
};