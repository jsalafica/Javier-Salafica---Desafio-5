import { Router } from "express";

const router = Router();
const products = [];
router.get("/", (req, res) => {
  res.render("productForm");
});

router.post("/productos", (req, res) => {
  const { name, price, thumbnail } = req.body;

  products.push({ name, price, thumbnail });

  res.redirect("/");
});

router.get("/product", (req, res) => {
  if (products.length > 0) {
    res.render("products", { products, hasAny: true });
  } else {
    res.render("products", { hasAny: false });
  }
});

export default router;
