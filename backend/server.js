const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

/* =========================
   GOOGLE SHEETS
========================= */

const auth = new google.auth.GoogleAuth({
  keyFile: "saidurgacadd-8be028a45a5b.json",
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

/* =========================
   EMAIL
========================= */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/enquiry", async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      service,
      meetingDate,
      meetingTime,
      meetingMode,
      message,
    } = req.body;

    /* =====================
       GENERATE ENQUIRY ID
    ===================== */

    const currentYear =
      new Date().getFullYear();

    const existingRows =
      await sheets.spreadsheets.values.get({
        spreadsheetId:
          process.env.SHEET_ID,
        range: "Enquiries!A:A",
      });

    const rowCount =
      existingRows.data.values
        ? existingRows.data.values.length
        : 1;

    const serialNumber =
      String(rowCount).padStart(4,"0");

    const enquiryId =
      `SDCP-${currentYear}-${serialNumber}`;

    const submittedAt =
      new Date().toLocaleString(
        "en-IN",
        {
          dateStyle: "medium",
          timeStyle: "short",
        }
      );

    /* =====================
       SAVE TO SHEET
    ===================== */

    await sheets.spreadsheets.values.append({
      spreadsheetId:
        process.env.SHEET_ID,
      range: "Enquiries!A:L",
      valueInputOption:
        "USER_ENTERED",

      requestBody: {
        values: [
          [
            enquiryId,
            submittedAt,
            name,
            company,
            email,
            phone,
            service,
            meetingDate,
            meetingTime,
            meetingMode,
            message,
            "Pending",
          ],
        ],
      },
    });

    /* =====================
       ADMIN EMAIL
    ===================== */

const adminMail = {
  from: process.env.EMAIL_USER,

  to: process.env.ADMIN_EMAIL,

  replyTo: email,

  subject: `🔔 New Enquiry | ${enquiryId} | ${company}`,

  html: `
  <div style="
    font-family: Arial, sans-serif;
    max-width:700px;
    margin:auto;
    border:1px solid #e5e7eb;
    border-radius:12px;
    overflow:hidden;
  ">

    <div style="
      background:#0f172a;
      color:white;
      padding:20px;
    ">
      <h1 style="margin:0;">
        Sai Durga CADD Projects
      </h1>

      <p style="margin-top:8px;">
        New Client Enquiry Received
      </p>
    </div>

    <div style="padding:24px;">

      <h2 style="color:#0f172a;">
        Enquiry Details
      </h2>

      <table style="
        width:100%;
        border-collapse:collapse;
      ">

        <tr>
          <td><b>Enquiry ID</b></td>
          <td>${enquiryId}</td>
        </tr>

        <tr>
          <td><b>Name</b></td>
          <td>${name}</td>
        </tr>

        <tr>
          <td><b>Company</b></td>
          <td>${company}</td>
        </tr>

        <tr>
          <td><b>Email</b></td>
          <td>${email}</td>
        </tr>

        <tr>
          <td><b>Phone</b></td>
          <td>${phone}</td>
        </tr>

        <tr>
          <td><b>Service</b></td>
          <td>${service}</td>
        </tr>

      </table>

      <hr style="margin:20px 0;" />

      <h3 style="color:#0f172a;">
        Meeting Preference
      </h3>

      <p>
        <b>Date:</b> ${meetingDate}
      </p>

      <p>
        <b>Time:</b> ${meetingTime}
      </p>

      <p>
        <b>Mode:</b> ${meetingMode}
      </p>

      <hr style="margin:20px 0;" />

      <h3 style="color:#0f172a;">
        Project Requirements
      </h3>

      <div style="
        background:#f8fafc;
        padding:16px;
        border-radius:8px;
        border-left:4px solid #14b8a6;
      ">
        ${message}
      </div>

    </div>
  </div>
  `,
};

    /* =====================
       CLIENT EMAIL
    ===================== */

const clientMail = {
  from: process.env.EMAIL_USER,

  to: email,

  subject:
    `Enquiry Confirmation - ${enquiryId}`,

  html: `
  <div style="
    font-family:Arial,sans-serif;
    max-width:700px;
    margin:auto;
    border:1px solid #e5e7eb;
    border-radius:12px;
    overflow:hidden;
  ">

    <div style="
      background:#0f172a;
      color:white;
      padding:20px;
    ">

      <h1 style="margin:0;">
        Sai Durga CADD Projects
      </h1>

    </div>

    <div style="padding:24px;">

      <h2 style="
        color:#0f172a;
      ">
        Thank You For Contacting Us
      </h2>

      <p>
        Dear ${name},
      </p>

      <p>
        We have successfully received
        your enquiry.
      </p>

      <p>
        Our engineering team will review
        your requirements and contact
        you shortly.
      </p>

      <div style="
        background:#f8fafc;
        padding:20px;
        border-radius:10px;
        margin-top:20px;
      ">

        <p>
          <b>Enquiry ID:</b>
          ${enquiryId}
        </p>

        <p>
          <b>Service:</b>
          ${service}
        </p>

        <p>
          <b>Preferred Date:</b>
          ${meetingDate}
        </p>

        <p>
          <b>Preferred Time:</b>
          ${meetingTime}
        </p>

        <p>
          <b>Meeting Mode:</b>
          ${meetingMode}
        </p>

        <p>
          <b>Status:</b>
          Pending Review
        </p>

      </div>

      <p style="
        margin-top:20px;
      ">
        If you need to provide any
        additional information,
        simply reply to this email.
      </p>

      <br>

      <p>
        Regards,
      </p>

      <p>
        <b>Sai Durga CADD Projects</b>
      </p>

    </div>
  </div>
  `,
};

await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(clientMail),
    ]);

    res.status(200).json({
      success: true,
      enquiryId,
      message:
        "Enquiry submitted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        error.message || "Server Error",
    });
  }
});


/* =========================
   HEALTH CHECK
========================= */

app.get("/", (req, res) => {
  res.send("Sai Durga Backend Running");
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});