import { Router } from "express";

const router = Router();
const products = [];

router.get("/", (req, res) => {
  res.render("datos.pug");
});

router.post("/productos", (req, res) => {
  console.log(req.body);
  // const { name, price, thumbnail } = req.body;

  // products.push({ name, price, thumbnail });

  res.redirect("/");
});

export default router;
