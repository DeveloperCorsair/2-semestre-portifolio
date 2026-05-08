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

// PUT /api/projetos/:id — atualiza um projeto existente
const atualizarProjeto = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = projetos.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ sucesso: false, mensagem: "Projeto não encontrado para atualização." });
    }

    // Mescla os dados antigos com os dados novos enviados no corpo da requisição
    const projetoAtualizado = { ...projetos[index], ...req.body };
    projetos[index] = projetoAtualizado;

    res.status(200).json({ 
      sucesso: true, 
      mensagem: "Projeto atualizado com sucesso!", 
      dados: projetoAtualizado 
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao atualizar projeto." });
  }
};

// DELETE /api/projetos/:id — deleta um projeto
const deletarProjeto = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = projetos.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ sucesso: false, mensagem: "Projeto não encontrado para exclusão." });
    }

    // Remove 1 item a partir da posição encontrada
    const projetoDeletado = projetos.splice(index, 1);

    res.status(200).json({ 
      sucesso: true, 
      mensagem: "Projeto deletado com sucesso!", 
      dados: projetoDeletado[0] 
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao deletar projeto." });
  }
};

// Exportando todas as funções
module.exports = { 
  listarProjetos, 
  buscarProjetoPorId, 
  listarDestaques,
  atualizarProjeto,
  deletarProjeto
};