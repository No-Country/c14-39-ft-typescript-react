import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import * as dotenv from "dotenv";
dotenv.config();

const { MAIL_PASSWORD } = process.env;


interface EmailRequest {
    toEmail: string;
    subject: string;
    text: string;
}

export const sendEmail = async (req: Request, res: Response) => {
    const { toEmail, subject, text }: EmailRequest = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'reservatucampo@gmail.com',
            pass: `${MAIL_PASSWORD}`
        }
    });


    const mailOptions = {
        from: 'reservatucampo@gmail.com',
        to: toEmail,
        subject: subject,
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email enviado con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al enviar el email' });
    }

}
