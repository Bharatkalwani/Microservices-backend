const express = require("express");

const app = express();
app.use(express.json());

app.get("/product/health", (req, res) => {
  res.send("Product Service is running");
});

const PORT = 4002; // 🔹 Changed to 4002
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
