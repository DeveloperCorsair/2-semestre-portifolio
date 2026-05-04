// controllers/cursosController.js
const cursos   = require("../data/cursos");

// GET /api/cursos — lista todos
const listarCursos = (req, res) => {
  try {
    res.status(200).json({
      sucesso: true,
      total: cursos.length,
      dados: cursos
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar cursos." });
  }
};

// GET /api/cursos/:id — busca por ID
const buscarCursoPorId = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const curso = cursos.find((c) => c.id === id);

    if (!curso) {
      return res.status(404).json({ sucesso: false, mensagem: "Curso não encontrado." });
    }

    res.status(200).json({ sucesso: true, dados: curso });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar curso." });
  }
};

// GET /api/cursos/categoria/:categoria — filtra por categoria
const filtrarPorCategoria = (req, res) => {
  try {
    const { categoria } = req.params;
    const filtrados = cursos.filter(
      (c) => c.categoria.toLowerCase() === categoria.toLowerCase()
    );

    res.status(200).json({
      sucesso: true,
      total: filtrados.length,
      dados: filtrados
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao filtrar cursos." });
  }
};

module.exports = { listarCursos, buscarCursoPorId, filtrarPorCategoria };
