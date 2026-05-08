const express = require("express");
const router = express.Router();
const { 
  listarProjetos, 
  buscarProjetoPorId, 
  listarDestaques,
  atualizarProjeto,
  deletarProjeto 
} = require("../controllers/projetosController");

router.get("/", listarProjetos);
router.get("/destaque", listarDestaques); // IMPORTANTE: Deixe a rota /destaque acima da rota /:id para o Express não confundir
router.get("/:id", buscarProjetoPorId);

// Adicionando as rotas PUT e DELETE
router.put("/:id", atualizarProjeto);
router.delete("/:id", deletarProjeto);

module.exports = router;