const fs = require("fs");
const path = require("path");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// Helper function to read carts from JSON file
const readCarts = () => {
  try {
    const filePath = path.join(__dirname, "../data/carts.json");
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading carts:", err);
    return [];
  }
};

// Helper function to write carts to JSON file
const writeCarts = (carts) => {
  try {
    const filePath = path.join(__dirname, "../data/carts.json");
    fs.writeFileSync(filePath, JSON.stringify(carts, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing carts:", err);
    return false;
  }
};

//CREATE
router.post("/", async (req, res) => {
  try {
    const carts = readCarts();
    const newCart = {
      ...req.body,
      _id: req.body._id || Date.now().toString() + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    carts.push(newCart);
    writeCarts(carts);
    res.status(200).json(newCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const carts = readCarts();
    const cartIndex = carts.findIndex(
      (c) => c._id === req.params.id
    );

    if (cartIndex === -1) {
      return res.status(404).json("Cart item not found");
    }

    carts[cartIndex] = {
      ...carts[cartIndex],
      ...req.body,
      _id: carts[cartIndex]._id,
      updatedAt: new Date().toISOString(),
    };
    writeCarts(carts);
    res.status(200).json(carts[cartIndex]);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const carts = readCarts();
    // Try to find by _id first, then by productId
    const filteredCarts = carts.filter(
      (c) => c._id !== req.params.id && c.productId !== req.params.id
    );

    if (carts.length === filteredCarts.length) {
      return res.status(404).json("Cart item not found");
    }

    writeCarts(filteredCarts);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
router.get("/find/:userId", async (req, res) => {
  try {
    const carts = readCarts();
    const cart = carts.find((c) => c.userId === req.params.userId);

    if (!cart) {
      return res.status(404).json("Cart not found");
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const carts = readCarts();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
