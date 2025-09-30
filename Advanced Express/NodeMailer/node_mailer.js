const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"rathorehrharsh@gmail.com",
        pass:"gmail1234harsh@.com"
    }
});

const mailOptions = {
    from:"rathorehrharsh5@gmail.com",
    to:"yoshita2105@gmail.com",
    subject:"Hello From Node JS!",
    text:"This is a test email"
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(info.response);
    }
})