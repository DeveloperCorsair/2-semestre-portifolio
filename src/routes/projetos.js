// routes/projetos.js
const express = require("express");
const router = express.Router();
const {
  listarProjetos,
  buscarProjetoPorId,
  listarDestaques
} = require("../controllers/projetosController");

// IMPORTANTE: rota de destaque ANTES de /:id para não conflitar
router.get("/destaque", listarDestaques);
router.get("/", listarProjetos);
router.get("/:id", buscarProjetoPorId);

module.exports = router;