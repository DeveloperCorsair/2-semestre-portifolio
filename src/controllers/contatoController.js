// controllers/contatoController.js
const nodemailer = require("nodemailer");

// Validação simples dos campos
const validarContato = ({ nome, email, assunto, mensagem }) => {
  const erros = [];

  if (!nome || nome.trim().length < 2)
    erros.push("Nome deve ter pelo menos 2 caracteres.");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email))
    erros.push("E-mail inválido.");

  if (!assunto || assunto.trim().length < 3)
    erros.push("Assunto deve ter pelo menos 3 caracteres.");

  if (!mensagem || mensagem.trim().length < 10)
    erros.push("Mensagem deve ter pelo menos 10 caracteres.");

  return erros;
};

// POST /api/contato — envia mensagem
const enviarMensagem = async (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  // Valida os campos
  const erros = validarContato({ nome, email, assunto, mensagem });
  if (erros.length > 0) {
    return res.status(400).json({ sucesso: false, erros });
  }

  try {
    // Configuração do transportador (Gmail como exemplo)
    // Para usar: defina EMAIL_USER e EMAIL_PASS nas variáveis de ambiente
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  // usar App Password do Google
      }
    });

    await transporter.sendMail({
      from: `"${nome}" <${process.env.EMAIL_USER}>`,
      to: "henriquemartins7t@gmail.com",
      replyTo: email,
      subject: `[Portfólio] ${assunto}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>De:</strong> ${nome} (${email})</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <hr/>
        <p>${mensagem.replace(/\n/g, "<br/>")}</p>
      `
    });

    res.status(200).json({
      sucesso: true,
      mensagem: "Mensagem enviada com sucesso! Respondo em menos de 24h. ✓"
    });
  } catch (erro) {
    console.error("Erro ao enviar e-mail:", erro.message);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao enviar mensagem. Tente novamente mais tarde."
    });
  }
};

module.exports = { enviarMensagem };
