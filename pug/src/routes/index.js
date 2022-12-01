import { Router } from "express";

const router = Router();
// const products = [
//   {
//     name: "Lavarropas",
//     price: 125,
//     thumbnail:
//       "https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/moon-256.png",
//   },
// ];
const products = [];

router.get("/", (req, res) => {
  res.render("datos.pug");
});

router.post("/productos", (req, res) => {
  // console.log(req.body);
  const { name, price, thumbnail } = req.body;

  products.push({ name, price, thumbnail });

  res.redirect("/");
});

router.get("/productos", (req, res) => {
  res.render("products.pug", { products });
});

export default router;
