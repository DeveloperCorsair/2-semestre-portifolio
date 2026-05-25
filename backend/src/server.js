// server.js
const express = require("express");
const db = require('./db')
const cors = require("cors");

const projetosRoutes = require("./routes/projetos");
const cursosRoutes = require("./routes/cursos");
const contatoRoutes = require("./routes/contato");

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/projetos', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * from projetos');

    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      erro: 'Erro no banco'
    });
  }
});

// ── Middlewares ──────────────────────────────────────────
app.use(cors({
  origin: "*"  // em produção, troque pelo domínio do seu portfólio
}));
app.use(express.json());

// ── Rotas ────────────────────────────────────────────────
app.use("/api/projetos", projetosRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/contato", contatoRoutes);

// ── Health check ─────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    api: "Portfólio Henrique",
    versao: "1.0.0",
    status: "online 🚀",
    endpoints: [
      "GET  /api/projetos",
      "GET  /api/projetos/destaque",
      "GET  /api/projetos/:id",
      "GET  /api/cursos",
      "GET  /api/cursos/:id",
      "GET  /api/cursos/categoria/:categoria",
      "GET  /api/contato",
      "POST /api/contato",
      "POST /api/cursos",
      "POST /api/projetos",
      "PUT  /api/cursos/1",
      "PUT  /api/projetos/1",
      "DELETE  /api/cursos/1",
      "DELETE  /api/projetos/1",
      "DELETE  /api/contatos/1"
    ]
  });
});

// ── 404 ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ sucesso: false, mensagem: "Rota não encontrada." });
});

// ── Start ─────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});