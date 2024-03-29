import express, { json, urlencoded } from "express";
import router from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/", router);

app.listen(8080, () => {
  console.log("Server listening port 8080");
});
