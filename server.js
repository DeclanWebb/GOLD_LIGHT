
import express from "express";
import cors from "cors";
import { respond } from "./aiCore.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", (req, res) => {
  res.json({ reply: respond(req.body.message || "") });
});

app.listen(3001, () => console.log("Goldlight backend running"));
