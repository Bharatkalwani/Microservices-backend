const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(express.json());
// :small_blue_diamond: Proxy rules
app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:4001", // Auth Service
    changeOrigin: true,
  })
);
app.use(
  "/product",
  createProxyMiddleware({
    target: "http://localhost:4002", // Product Service
    changeOrigin: true,
  })
);
app.use(
  "/order",
  createProxyMiddleware({
    target: "http://localhost:4003", // Order Service
    changeOrigin: true,
  })
);
app.get("/", (req, res) => {
  res.send("API Gateway is running :rocket:");
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});