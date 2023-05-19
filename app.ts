import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { indexRouter } from "./src/routers";

dotenv.config()

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cookieParser(), express.json())

app.use("/api", indexRouter)

app.listen(PORT, () => console.log(`Service running @ http://localhost:${PORT}`))