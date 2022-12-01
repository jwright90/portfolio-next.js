import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.TO_EMAIL, // Your email where you'll receive emails
      from: process.env.FROM_EMAIL, // your website email address here
      subject: `${req.body.subject}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Jason Wright - Portfolio</title>
        <meta name="description" content="Message">
        <meta name="author" content="Jason Wright">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            
      </head>
      
      <body>
        <div style="display: flex;justify-content: center; font-size: 16px; align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
          <div style="margin-left: 20px;margin-right: 20px;">
              <p><strong>Name:</strong> ${req.body.name} </p>
              <p><strong>Email:</strong> ${req.body.email} </p>
              <p><strong>Message:</strong> ${req.body.message}</p>
              <br>
            </div>
          </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;