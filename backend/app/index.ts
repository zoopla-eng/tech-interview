import express from "express";
import { seed } from "./db/seed.js";
import { getDB } from "./db/db.js";

const app = express();
app.use(express.json());
app.use("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

if (process.env.DB_ENABLED === 'true') {
  await seed(await getDB());
}

const port = 9000;
app.listen(port, () => {
  console.log(`App listening on port ${port} 🚀`);
});
