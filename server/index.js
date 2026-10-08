import express from "express";
import dotenv from "dotenv";
import puzzlesRouter from "./routes/puzzles.js";
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use("/api", puzzlesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
