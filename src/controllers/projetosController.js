// controllers/projetosController.js
const projetos = require("../data/projetos");

// GET /api/projetos — lista todos
const listarProjetos = (req, res) => {
  try {
    res.status(200).json({
      sucesso: true,
      total: projetos.length,
      dados: projetos
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar projetos." });
  }
};

// GET /api/projetos/:id — busca por ID
const buscarProjetoPorId = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const projeto = projetos.find((p) => p.id === id);

    if (!projeto) {
      return res.status(404).json({ sucesso: false, mensagem: "Projeto não encontrado." });
    }

    res.status(200).json({ sucesso: true, dados: projeto });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar projeto." });
  }
};

// GET /api/projetos/destaque — apenas projetos em destaque
const listarDestaques = (req, res) => {
  try {
    const destaques = projetos.filter((p) => p.destaque === true);
    res.status(200).json({
      sucesso: true,
      total: destaques.length,
      dados: destaques
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar destaques." });
  }
};

module.exports = { listarProjetos, buscarProjetoPorId, listarDestaques };