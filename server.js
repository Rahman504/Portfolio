require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin:["https://portfolio-nine-nu-abdulrahman.vercel.app", 
  "http://localhost:3000"
],
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

 try {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${name}`,
    text: message,
  });

  console.log("Message sent:", info.response);
  res.json({ success: true, message: "Email sent successfully!" });
} catch (err) {
  console.error("Email sending error:", err);
  res.status(500).json({ success: false, message: "Error sending email" });
}

});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
