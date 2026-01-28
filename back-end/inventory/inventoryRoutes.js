const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateById,
  deleteProduct,
} = require("./inventoryController");

// GET /inventory : read all
router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /inventory/:id : read by id
router.get("/:id", async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (err) {
    // bad ObjectId format will throw
    res.status(400).json({ message: "Invalid id" });
  }
});

// POST /inventory : create
router.post("/", async (req, res) => {
  try {
    const created = await createProduct(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH /inventory/:id : full update
router.patch("/:id", async (req, res) => {
  try {
    const result = await updateById(req.params.id, req.body);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Not found" });
    }

    // optional: return the updated product (nice UX)
    const updatedProduct = await getProductById(req.params.id);
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /inventory/:id : delete
router.delete("/:id", async (req, res) => {
  try {
    const ok = await deleteProduct(req.params.id);
    if (!ok) return res.status(404).json({ message: "Not found" });
    res.json({ deleted: true });
  } catch (err) {
    res.status(400).json({ message: "Invalid id" });
  }
});

module.exports = router;
