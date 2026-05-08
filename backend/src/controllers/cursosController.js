// controllers/cursosController.js
const cursos = require("../data/cursos");

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

// PUT /api/cursos/:id — atualiza um curso existente
const atualizarCurso = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = cursos.findIndex((c) => c.id === id);

    if (index === -1) {
      return res.status(404).json({ sucesso: false, mensagem: "Curso não encontrado para atualização." });
    }

    // Mescla os dados antigos com os dados novos vindos do req.body
    const cursoAtualizado = { ...cursos[index], ...req.body };
    cursos[index] = cursoAtualizado;

    res.status(200).json({ 
      sucesso: true, 
      mensagem: "Curso atualizado com sucesso!", 
      dados: cursoAtualizado 
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao atualizar curso." });
  }
};

// DELETE /api/cursos/:id — deleta um curso
const deletarCurso = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = cursos.findIndex((c) => c.id === id);

    if (index === -1) {
      return res.status(404).json({ sucesso: false, mensagem: "Curso não encontrado para exclusão." });
    }

    // Remove 1 item a partir da posição encontrada
    const cursoDeletado = cursos.splice(index, 1);

    res.status(200).json({ 
      sucesso: true, 
      mensagem: "Curso deletado com sucesso!", 
      dados: cursoDeletado[0] 
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao deletar curso." });
  }
};

// Adicionando as novas funções no export
module.exports = { 
  listarCursos, 
  buscarCursoPorId, 
  filtrarPorCategoria,
  atualizarCurso,
  deletarCurso
};