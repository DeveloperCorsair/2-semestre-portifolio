// data/projetos.js
const projetos = [
  {
    id: 1,
    titulo: "Projeto 1",
    descricao: "Descrição do projeto 1. Breve resumo do que foi construído e qual problema resolve.",
    tecnologias: ["React", "Node.js", "MySQL"],
    github: "https://github.com/DeveloperCorsair/projeto-1",
    demo: "https://projeto-1.vercel.app",
    imagem: "/img/projetos/projeto1.png",
    destaque: true
  },
  {
    id: 2,
    titulo: "Projeto 2",
    descricao: "Descrição do projeto 2. Breve resumo do que foi construído e qual problema resolve.",
    tecnologias: ["Python", "Flask", "Docker"],
    github: "https://github.com/DeveloperCorsair/projeto-2",
    demo: null,
    imagem: "/img/projetos/projeto2.png",
    destaque: false
  }
];

module.exports = projetos;
