const express = require("express");

const router = express.Router();

const {
  getProduct,
  getProducts,
  createProdcut,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//get all products
router.get("/", getProducts);

// get a single product
router.get("/:id", getProduct);

//create a product
router.post("/", createProdcut);

//update a product

router.put("/:id", updateProduct);

//delete a prodcut

router.delete("/:id", deleteProduct);

module.exports = router;
