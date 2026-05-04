// routes/cursos.js
const express = require("express");
const router = express.Router();
const {
  listarCursos,
  buscarCursoPorId,
  filtrarPorCategoria
} = require("../controllers/cursosController");

// IMPORTANTE: rota de categoria ANTES de /:id
router.get("/categoria/:categoria", filtrarPorCategoria);
router.get("/", listarCursos);
router.get("/:id", buscarCursoPorId);

module.exports = router;