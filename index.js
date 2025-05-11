import express from "express";
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Node js.");
});

app.get("/login", (req, res) => {
  res.send("Login to your acount");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
