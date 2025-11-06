import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import Authroutes from "./routes/Auth.js";
import MessageRoutes from "./routes/Message.js";
import ProductRoutes from "./routes/Product.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const port = 3010;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

app.use(express.json());
app.use(cors());

const ensureUploadsDirectoryExists = () => {
  const dir = path.join(__dirname, "uploads");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};
ensureUploadsDirectoryExists();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    ensureUploadsDirectoryExists();
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send({ filePath: `/uploads/${req.file.filename}` });
});

app.use("/api/auth", Authroutes);
app.use("/api/messages", MessageRoutes);
app.use("/api/products", upload.array("images"), ProductRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
