var nodeMailer = require('nodemailer');

exports.sendEmail = function () {
    // create reusable transporter object using the default SMTP transport
//var transporter = nodemailer.createTransport('smtp://178673693%40qq.com:bdgmvvbnhktibgce@smtp.qq.com');
// var transporter = nodemailer.createTransport('smtps://hiqiuyi2016%40gmail.com:Qy123456@smtp.gmail.com');

// var smtpConfig = {
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'hiqiuyi2016@gmail.com',
//         pass: 'Qy123456'
//     }
// };

// var smtpConfig = {
//     host: 'smtp.qq.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: '178673693@qq.com',
//         pass: 'bdgmvvbnhktibgce'
//     }
// };

// var smtpConfig = {
//     host: 'smtp.exmail.qq.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'autumn@romenscd.cn',
//         pass: 'Qy2016'
//     }
// };

// var smtpConfig = {
//     host: 'smtp.126.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'qy_stone@126.com',
//         pass: 'Qy7178560623'
//     }
// };

//邮箱配置
    var smtpConfig = {
        host: 'smtp.163.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'jin_yaoshi@163.com',
            pass: 'Qy7178560623'
        }
    };

//内容配置
    var mailOptions = {
        from: '"发送者姓名" <jin_yaoshi@163.com>', // sender address
        to: 'jin_yaoshi@163.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world☺', // plaintext body
        html: '<b>Hello world☺</b>' // html body
    };

// 邮件发送
    var transporter = nodeMailer.createTransport(smtpConfig);
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};
