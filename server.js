const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // allows requests from your frontend

// configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gloweeyah2002@gmail.com', // your Gmail
        pass: 'ercs kajz dwwu holp' // NOT your Gmail password! Use App Password
    }
});

app.post('/send', async (req, res) => {
    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ error: 'Missing email or message' });
    }

    const mailOptions = {
        from: email, // sender
        to: 'gloweeyah2002@gmail.com', // your Gmail
        subject: `New message from ${email}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));