import express from "express";
import cors from "cors";
import { google } from "googleapis";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === "production";

// Middleware
app.use(cors());
app.use(express.json());

// ---------- Google Sheets auth ----------
async function getGoogleSheetsClient() {
  let credentials;

  // Option 1: JSON string in env var (for deployment / CI)
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_JSON) {
    credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_JSON);
  }
  // Option 2: Path to key file (for local dev)
  else if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE) {
    const raw = readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE, "utf-8");
    credentials = JSON.parse(raw);
  } else {
    throw new Error("No Google service account credentials configured. Set GOOGLE_SERVICE_ACCOUNT_KEY_JSON or GOOGLE_SERVICE_ACCOUNT_KEY_FILE in .env");
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
}

// ---------- POST /api/contact ----------
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Timestamp in IST (India Standard Time)
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Write to Google Sheet
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEET_ID not set in .env");
    }

    const headers = ["Timestamp", "Name", "Email", "Phone", "Subject", "Message"];
    const { data } = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1:F1",
    });
    const hasHeaders = data.values && data.values.length > 0 && data.values[0].length > 0;

    if (!hasHeaders) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "Sheet1!A1:F1",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [headers] },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            name.trim(),
            email.trim(),
            (phone || "").trim(),
            (subject || "").trim(),
            message.trim(),
          ],
        ],
      },
    });

    console.log(`[${timestamp}] New contact from: ${name} (${email})`);
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact:", error.message);
    res.status(500).json({ error: "Failed to save message. Please try again later." });
  }
});

// ---------- Health check ----------
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ---------- Serve frontend (single service on Render) ----------
if (isProduction) {
  const distPath = path.join(__dirname, "..", "dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// ---------- Start ----------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
