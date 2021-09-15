const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
});

app.post("/api", async (req, res) => {
  country = req.body.msg;
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  try {
    let response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(8080, () => {
  console.log("server go brrr");
});
