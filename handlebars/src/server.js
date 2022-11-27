import express, { json, urlencoded } from "express";
import routs from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use("/", routs);

app.use("/images", express.static(path.join(__dirname + "/uploads")));
app.use("/public", express.static(path.join(__dirname + "/html")));

app.listen(8080, (error) => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Server listening on port 8080");
  }
});
