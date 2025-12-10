const fs = require("fs");
const path = require("path");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// Helper function to read products from JSON file
const readProducts = () => {
  try {
    const filePath = path.join(__dirname, "../data/products.json");
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading products:", err);
    return [];
  }
};

// Helper function to write products to JSON file
const writeProducts = (products) => {
  try {
    const filePath = path.join(__dirname, "../data/products.json");
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing products:", err);
    return false;
  }
};

//CREATE
router.post("/", async (req, res) => {
  try {
    const products = readProducts();
    const newProduct = {
      ...req.body,
      _id: req.body._id || req.body.artnr?.toString() || Date.now().toString(),
    };
    products.push(newProduct);
    writeProducts(products);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const products = readProducts();
    const productIndex = products.findIndex(
      (p) => p._id === req.params.id || p.artnr?.toString() === req.params.id
    );

    if (productIndex === -1) {
      return res.status(404).json("Product not found");
    }

    products[productIndex] = {
      ...products[productIndex],
      ...req.body,
      _id: products[productIndex]._id,
    };
    writeProducts(products);
    res.status(200).json(products[productIndex]);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const products = readProducts();
    const filteredProducts = products.filter(
      (p) => p._id !== req.params.id && p.artnr?.toString() !== req.params.id
    );

    if (products.length === filteredProducts.length) {
      return res.status(404).json("Product not found");
    }

    writeProducts(filteredProducts);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const products = readProducts();
    const product = products.find(
      (p) => p._id === req.params.id || p.artnr?.toString() === req.params.id
    );

    if (!product) {
      return res.status(404).json("Product not found");
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products = readProducts();

    if (qNew) {
      // Sort by _id (which is based on artnr) descending and limit to 1
      products = products
        .sort((a, b) => (b._id || "").localeCompare(a._id || ""))
        .slice(0, 1);
    } else if (qCategory) {
      products = products.filter((p) => p.category === qCategory);
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
