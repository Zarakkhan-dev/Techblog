import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "./SendMail/emailSender";
type Data = {
  name: string;
  email:string,
  subject:string,
  message:string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
 

    const {name,email,subject,message} = req.body;

    if(email){
        sendEmail(email,subject, message)
        res.status(202).send({name});
    }
    else{
        res.status(201).send("Invalid email");
    }

    res.status(200).json({ name: "John Doe" });
}
