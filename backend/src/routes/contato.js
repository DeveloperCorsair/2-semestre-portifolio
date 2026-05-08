// routes/contato.js
const express = require("express");
const router = express.Router();
const { enviarMensagem, listarContato, deletarContato } = require("../controllers/contatoController");

router.get("/", listarContato);
router.post("/", enviarMensagem);

// Adicionamos o /:id para indicar que a rota espera receber um parâmetro dinâmico
router.delete("/:id", deletarContato); 

module.exports = router;