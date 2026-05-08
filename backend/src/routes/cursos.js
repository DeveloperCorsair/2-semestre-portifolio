// Exemplo de como deve ficar o seu routes/cursos.js
const express = require("express");
const router = express.Router();
const { 
  listarCursos, 
  buscarCursoPorId, 
  filtrarPorCategoria, 
  atualizarCurso, 
  deletarCurso 
} = require("../controllers/cursosController");

router.get("/", listarCursos);
router.get("/:id", buscarCursoPorId);
router.get("/categoria/:categoria", filtrarPorCategoria);

// Adicionando as rotas de PUT e DELETE
router.put("/:id", atualizarCurso);
router.delete("/:id", deletarCurso);

module.exports = router;