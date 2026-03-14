const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
	cors({
		origin: allowedOrigin,
		credentials: true,
	})
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
	res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);

app.use((err, _req, res, _next) => {
	console.error(err);

	if (res.headersSent) {
		return;
	}

	res.status(err.statusCode || 500).json({
		message: err.message || "Internal server error",
	});
});

module.exports = app;
