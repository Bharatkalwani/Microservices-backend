const express = require("express");

const app = express();
app.use(express.json());

app.get("/order/health", (req, res) => {
  res.send("Order Service is running");
});

// Method 1 - (Calling services from https) order creation route 
app.post("/orders", async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // call product-service to check product
    const response = await axios.get(`http://product-service:4002/products/${productId}`);
    const product = response.data;

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // (Here you’d normally save order in DB)
    return res.json({
      message: "Order placed successfully",
      product,
      quantity
    });
  } catch (err) {
    return res.status(500).json({ error: "Error while creating order" });
  }
});



const PORT =  4003; // 🔹 Changed to 4003
app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
