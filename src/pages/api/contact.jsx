import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, phone, company, email, subject } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: "forms.fidentia@zohomail.com",
      to: "contato@fidentia.com.br",
      subject: `Nova conversa formulário fidentia: ${name}`,
      html: `<p><strong>Nome: </strong>${name}</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Telefone: </strong> ${phone}</p><br>
        <p><strong>Empresa: </strong> ${company}</p><br>
        <p><strong>Assunto: </strong> ${subject}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};