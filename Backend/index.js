const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json({ limit: "1mb" }));

const getUniversities = async (req, res) => {
  country = req.body.msg;
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  let response = await axios.get(url);
  res.send(response.data);
};

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
});

app.post("/api", async (req, res) => {
  getUniversities(req, res).catch((err) => {
    res.status(500).send(err);
  });
});

app.listen(8080, () => {
  console.log("server go brrr");
});
