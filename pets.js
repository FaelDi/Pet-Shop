
const pets = require("./pets.json")
const http = require('http');

const petshop = require("./petshop.js");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  if(req.url == "/listar")
  {
    res.statusCode = 200;
    //res.setHeader('Content-Type', 'application/json');
    return res.end(petshop.listarPets());
  }
  /*if(req.url.includes("/addPet/")){

    res.statusCode = 200;
    let nomePet = req.url;
    console.log(nomePet);
    petshop.addPet(nomePet);
    //res.setHeader('Content-Type', 'text/plain');
    return res.end(`Pet adicionado com sucesso: ${nomePet}`);
  }*/
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});