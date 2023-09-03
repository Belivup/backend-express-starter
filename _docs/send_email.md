
transporter

    import nodemailer from 'nodemailer'
    
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    
    export default transporter

sendEmail
    
    import readTemplate from "../../../lib/email/readTemplate.mjs";
    import transporter from "../../../lib/email/transporter.mjs";
    
    export const sendEmail = async (req, res) => {
    
        const name = "Nazmul Hossain" || "Guest"
        const email = "Nhronju@gmail.com"
    
        const template = await readTemplate('welcomeMail')
    
        const info = await transporter.sendMail({
            from: '"Hello World 👻" <demo@mail.org>',
            to: email,
            subject: `Hello ${name}`,
            text: `Hello world, ${name}`,
            html: template.replace(/{{name}}/g, name).replace(/{{email}}/g, email)
        });
    
        console.log("Message sent: %s", info.messageId);
    
        res.send( info.messageId)
    }






