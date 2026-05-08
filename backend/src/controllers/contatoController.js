// controllers/contatoController.js
const nodemailer = require("nodemailer");
const contatos = require("../data/contato");
require("dotenv").config();

// Validação super simples (só verifica se enviou o dado)
const validarContato = ({ nome, email, assunto, mensagem }) => {
  const erros = [];

  if (!nome) erros.push("Nome é obrigatório.");
  if (!email) erros.push("E-mail é obrigatório.");
  if (!assunto) erros.push("Assunto é obrigatório.");
  if (!mensagem) erros.push("Mensagem é obrigatória.");

  return erros;
};

// GET /api/contato/ — lista todos
const listarContato = (req, res) => {
  try {
    res.status(200).json({
      sucesso: true,
      total: contatos.length,
      dados: contatos
    });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar contatos." });
  }
};

// POST /api/contato — envia mensagem
// POST /api/contato — envia mensagem
const enviarMensagem = async (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  // Valida os campos
  const erros = validarContato({ nome, email, assunto, mensagem });
  if (erros.length > 0) {
    return res.status(400).json({ sucesso: false, erros });
  }

  try {
    // 1. CRIA O NOVO CONTATO E SALVA NO ARRAY (AQUI ESTÁ A CORREÇÃO)
    const novoContato = {
      id: Date.now(),
      nome,
      email,
      assunto,
      mensagem
    };
    contatos.push(novoContato);

    // 2. cria conta fake automaticamente
    const testAccount = await nodemailer.createTestAccount();

    // 3. cria transporter temporário
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // 4. envia email fake
    const info = await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to: "teste@teste.com",
      subject: assunto,
      text: mensagem,
    });

    console.log("Email enviado!");
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

    res.json({
      sucesso: true,
      mensagem: "Contato salvo e e-mail enviado!",
      dados: novoContato, // opcional: retorna o contato criado
      preview: nodemailer.getTestMessageUrl(info),
    });
  } catch (erro) {
    console.error("Erro ao enviar e-mail:", erro.message);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao enviar mensagem. Tente novamente mais tarde."
    });
  }
};

const deletarContato = (req, res) => {
  const { id } = req.params; // Pega o ID que vem na URL

  // Procura a posição (index) do contato no nosso array
  // Usamos '==' em vez de '===' porque o id da URL vem como string e o do array pode ser número
  const index = contatos.findIndex(contato => contato.id == id);

  // Se não encontrar o index (-1), retorna erro 404 (Not Found)
  if (index === -1) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Contato não encontrado."
    });
  }

  // Remove 1 item do array a partir da posição encontrada
  const contatoDeletado = contatos.splice(index, 1);

  res.status(200).json({
    sucesso: true,
    mensagem: "Contato deletado com sucesso!",
    dados: contatoDeletado[0] // Mostra qual contato foi apagado
  });
};

// Adicione a função no module.exports
module.exports = { enviarMensagem, listarContato, deletarContato };