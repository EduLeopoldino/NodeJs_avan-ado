const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const buscaCep = require('./src/functions/buscaCep')
const climaCity = require('./src/functions/climaCity')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// declarando que vou usar o ejs
app.set("view engine", "ejs");
// mostrando para o express onde ta minha pasta views
app.set("views", "./src/views");

// rendereizando minha pagina principal
app.get("/", (req, res) => {
    // chamando o arquivo da minha view
  res.render("index");
});

app.post("/consulta", async (req, res) => {
  const { city, uf, street } = req.body;
  const clima = await climaCity(city, uf)
  const cep = await buscaCep(uf, city, street)
  const resultado = {cep, clima}
  
  res.render("resultado", {dado: resultado});
})

app.listen(3333);
