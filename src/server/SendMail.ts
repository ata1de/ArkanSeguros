import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function  MailHandler(emailConfig: {
    userName: string,
    userEmail: string,
    subject: string,
    html: string,
})  {
    try {

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        })
    
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,   
            subject: emailConfig.subject,
            html: emailConfig.html
        })

        console.log('Email enviado com sucesso');
        return true
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return false
    }

    
}

export default MailHandler