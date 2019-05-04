exports.index = function (request, response) {
    const nodeMailer = require('nodemailer');

    const name = request.body.name;
    const email = request.body.email;
    const phone = request.body.phone;
    const org = request.body.org;
    const comment = request.body.comment;
    const service = request.body.service;

    console.log(process.env.G_USER + " " + process.env.G_PASSWORD + " " + process.env.G_EMAIL);
    console.log(name + " " + email);

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





    /*if(!request.body) return response.sendStatus(400);
    //response.sendStatus(200);
    response.json({
        success: true,
        reason: "test"
    });*/

};