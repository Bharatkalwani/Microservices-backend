const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    console.log("data")
  res.send("Auth Service is running");
});
console.log("data")

const PORT = 4001; 
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
