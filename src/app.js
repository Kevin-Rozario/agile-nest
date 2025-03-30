import express from "express"
import healthCheckRouter from "./routes/healthCheck.route.js"

const app = express()

app.use("/api/v1/health-check", healthCheckRouter);

export default app;