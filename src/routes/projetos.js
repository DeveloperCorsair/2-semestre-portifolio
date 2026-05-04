// routes/projetos.js
const express = require("express");
const router = express.Router();
const {
  listarProjetos,
  buscarProjetoPorId,
  listarDestaques
} = require("../controllers/projetosController");

router.get("/destaque", listarDestaques);
router.get("/", listarProjetos);
router.get("/:id", buscarProjetoPorId);

module.exports = router;
