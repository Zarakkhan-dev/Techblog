import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'zarakkhan1031@gmail.com',  
        pass: process.env.nodemailpassword,   
    }
});

const sendEmail = (to:string, subject:string, text:string) => {
    const mailOptions = {
        from: 'zarakkhan1031@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error:any) => {
        if (error) {
            console.log('Error occurred:', error.message);
        } else {
            console.log('Email sent successfully!');
        }
    });
};
type Data = {
  name: string;
  email:string,
  subject:string,
  message:string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
 

    const {name,email,subject,message} = req.body;

    if(email){
       await  sendEmail(email,subject, message)
        res.status(202).send({name});
    }
    else{
        res.status(201).send("Invalid email");
    }

    res.status(200).json({ name: "John Doe" });
}
