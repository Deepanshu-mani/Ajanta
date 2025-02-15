require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// POST route to handle contact form submission
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Split name into first and last name
  const nameParts = name.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || ""; // Handles cases where there's no last name

  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password (Not your Gmail password)
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // Where you want to receive the emails
      subject: `New Message from ${firstName} ${lastName}: ${subject}`,
      text: `You received a message from ${firstName} ${lastName} (${email}):\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.get("/", (req, res) => {
  res.send(`Server is Up and Running on Port ${PORT}`);
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));