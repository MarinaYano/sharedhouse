import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import postRouter from "./routes/postRouter.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET_KEY))
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	}),
);

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
})