import express from 'express';
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json({ limit: "200kb" }));

app.get("/health", (_req, res) => res.json({ status: "ok" }));

export default app;