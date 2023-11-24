import  nodemailer from "nodemailer"

export default async function (req,res){
    const { username,email,message } = req.body

    const data = {
        username,email,message
    }
    const user ='ngabosevelin@gmail.com' 

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:user,
            pass:'zpfx qisa azei pnki'
        }
    });
    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "infinitytechsolution7@gmail.com",
            replyTo: email,
            subject: `Infinity Tech Client ${username}`,
            html:`
            <p>Name: ${username}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `

        })
        console.log("message sent:", mail.messageId)

        return res.status(200).json({message: "success"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "coul not send the email. your  message was not sent"
        })
        
    }

   
}