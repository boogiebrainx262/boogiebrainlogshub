const express = require("express");
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: "USA Facebook 2010–2020", price: 8000 },
  { id: 2, name: "Dating Facebook ❤️", price: 25000 },
  { id: 3, name: "Netflix Premium", price: 5000 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => console.log("Server running"));
