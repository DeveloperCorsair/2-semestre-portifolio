// DADOS — projetos e cursos em arrays de objetos

const projetos = [
    {
        emoji: "🚀",
        link: "https://github.com/DeveloperCorsair/API-Censo-2022",
        linkLabel: "Github ↗",
        titulo: "OmniDevs",
        descricao: "Projeto de alunos da Fatec. Dedicado para ajudar a prefeitura de São José dos Campos na análise de dados sobre o censo da cidade.",
        tecnologias: ["Html & CSS", "Java Script", "Python", "Flask", "MySQL", "Git"]
    },
    {
        emoji: "🏡",
        link: "https://temperodacasa.vercel.app/",
        linkLabel: "Github ↗",
        titulo: "Tempero da Casa",
        descricao: "Este é um projeto simples e funcional de um cardápio digital de cozinha, ideal para restaurantes, cozinhas industriais ou até mesmo uso doméstico.",
        tecnologias: ["Html & CSS", "Java Script", "Git", "Vercel"]
    },
    {
        emoji: "⚡",
        link: "https://github.com/DeveloperCorsair/TCC-FINCASH-BACK-END",
        linkLabel: "Github ↗",
        titulo: "FinCash",
        descricao: "Essa plataforma visa facilitar o controle e a organização das finanças pessoais e empresariais. Uma maneira eficiente de gerenciar receitas, despesas.",
        tecnologias: ["React", "Tailwind", "Node.js", "TypeScript", "MongoDB", "Git"]
    }
];

const cursos = [
    {
        nome: "Introdução ao Scrum",
        provider: "Fundação Getúlio Vargas (FGV)",
        horas: "10h",
        ano: "2025"
    },
    {
        nome: "CS50x: Introdução à Ciência da Computação",
        provider: "Harvard University",
        horas: "80h",
        ano: "2025"
    }
];


// ============================================
// 1) ESTRUTURA DE DECISÃO — saudação por horário 
// ============================================

function exibirSaudacao() {
    const hora = new Date().getHours();
    let saudacao;

    if (hora >= 5 && hora < 12) {
        saudacao = "☀️ Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "🌤️ Boa tarde!";
    } else {
        saudacao = "🌙 Boa noite!";
    }

    document.getElementById("saudacao").textContent = saudacao;
}


// ============================================
// 2) FUNÇÃO + REPETIÇÃO — renderiza projetos 
// ============================================

function renderizarProjetos() {
    const container = document.getElementById("lista-projetos");
    container.innerHTML = "";

    for (let i = 0; i < projetos.length; i++) {
        const p = projetos[i];

        // Gera as tags de tecnologia com um loop interno
        let tagsHTML = "";
        for (let j = 0; j < p.tecnologias.length; j++) {
            tagsHTML += `<span class="hab-soft">${p.tecnologias[j]}</span>`;
        }

        container.innerHTML += `
            <div class="cards-proj-body">
                <div class="cards-git-header">
                    <div>${p.emoji}</div>
                    <a href="${p.link}" target="_blank">${p.linkLabel}</a>
                </div>
                <span class="proj-title">${p.titulo}</span>
                <span>${p.descricao}</span>
                <div>
                    <span class="hab-label">Tecnologias</span>
                    <div class="tech-soft">${tagsHTML}</div>
                </div>
            </div>
        `;
    }
}


// ============================================
// 3) FUNÇÃO + REPETIÇÃO — renderiza cursos 
// ============================================

function renderizarCursos() {
    const container = document.getElementById("lista-cursos");
    container.innerHTML = "";

    for (let i = 0; i < cursos.length; i++) {
        const c = cursos[i];

        const isUltimo = i === cursos.length - 1;

        container.innerHTML += `
            <div class="curso-item" ${isUltimo ? 'style="border-bottom:none"' : ''}>
                <div class="curso-col-esq">
                    <div class="curso-nome">${c.nome}</div>
                    <div class="curso-provider">${c.provider}</div>
                </div>
                <div class="curso-col-dir">
                    <span class="curso-hora">${c.horas}</span>
                    <span class="curso-ano">${c.ano}</span>
                </div>
            </div>
        `;
    }
}


// ============================================
// INICIALIZAÇÃO — roda tudo ao carregar a página
// ============================================

exibirSaudacao();
renderizarProjetos();
renderizarCursos();