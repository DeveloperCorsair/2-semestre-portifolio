// ============================================
// DADOS — projetos pessoais (cards simples)
// ============================================

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
// DADOS — projetos API (portfólio acadêmico)
// ============================================

const projetosAPI = [
    {
        semestre: "1º Semestre — 2025-2",
        titulo: "Plataforma de Análise de Dados do Censo 2022",
        empresaParceira: "Fatec – Prof. Massanori",
        problema: `A prefeitura de São José dos Campos precisava compreender o perfil socioeconômico da cidade com base nos dados do Censo 2022, mas as informações disponibilizadas pelo IBGE estavam distribuídas em múltiplos arquivos CSV de difícil interpretação. A ausência de uma ferramenta acessível obrigava os analistas a processar os dados manualmente em planilhas, tornando o processo lento e suscetível a erros.`,
        solucao: `Foi desenvolvida uma aplicação web que importa, processa e exibe os dados do Censo 2022 de forma visual e interativa. A plataforma permite que os analistas filtrem informações por região, faixa etária e indicadores socioeconômicos, exibindo os resultados em gráficos e tabelas responsivas. O back-end em Python/Flask processa os CSVs do IBGE e expõe uma API REST consumida pelo front-end em HTML, CSS e JavaScript puro.`,
        tipoSistema: "web",
        linkRepo: "https://github.com/OmniDevsOficial/API-Censo-2022",
        tecnologias: [
            { nome: "HTML & CSS", onde: "Estrutura e estilização das páginas da plataforma web" },
            { nome: "JavaScript", onde: "Interatividade, requisições à API e renderização dos gráficos" },
            { nome: "Python", onde: "Processamento e limpeza dos arquivos CSV do Censo" },
            { nome: "Flask", onde: "Framework web para criação da API REST" },
            { nome: "MySQL", onde: "Armazenamento dos dados processados do Censo" },
            { nome: "Git", onde: "Versionamento do código e colaboração em equipe" }
        ],
        papelScrum: "Desenvolvedor",
        contribuicoes: `Neste projeto atuei como Desenvolvedor e fui responsável pelo desenvolvimento do back-end em Python e Flask, incluindo os scripts de leitura e limpeza dos arquivos CSV fornecidos pelo IBGE e a criação dos endpoints da API REST consumidos pelo front-end. Modelei as tabelas do banco de dados MySQL para armazenar os dados processados e implementei as queries de filtragem por região e faixa etária. No front-end, integrei os gráficos utilizando a biblioteca Chart.js, consumindo os dados via Fetch API. Contribuí também com a criação do backlog no Jira e a definição das User Stories junto ao time.`,
        hardSkills: [
            { tech: "HTML & CSS", nivel: "autonomia" },
            { tech: "JavaScript", nivel: "autonomia" },
            { tech: "Python", nivel: "ajuda" },
            { tech: "Flask", onde: "ajuda" },
            { tech: "MySQL", nivel: "ajuda" },
            { tech: "Git", nivel: "autonomia" }
        ],
        softSkills: [
            {
                skill: "Resolução de problemas",
                exemplo: `Durante o processamento dos CSVs do Censo, identificamos que diferentes arquivos usavam encodings distintos (UTF-8 e Latin-1), o que gerava erros silenciosos nos dados importados. Mapeei o problema, documentei os arquivos afetados e implementei uma função de detecção automática de encoding usando a biblioteca chardet, eliminando os erros sem intervenção manual a cada importação.`
            },
            {
                skill: "Comunicação",
                exemplo: `Em uma sprint review, o cliente questionou por que determinados bairros não apareciam nos filtros. Usei minha capacidade de comunicação técnica para explicar que os dados do IBGE agrupavam esses bairros sob subdistrito e propus adaptar os filtros da interface para refletir a nomenclatura oficial, o que foi aceito e implementado na sprint seguinte.`
            }
        ]
    },
    {
        semestre: "2º Semestre — 2026-1",
        titulo: "Plataforma do Conteúdo Técnico de Normas Aeronáuticas",
        empresaParceira: "Akaer",
        problema: `O desafio consiste em desenvolver uma plataforma web estruturada para centralizar, organizar e correlacionar requisitos normativos, técnicos e de engenharia, com o objetivo de facilitar a consulta e o acesso a informações críticas para a equipe de engenharia da empresa. Atualmente, os dados estão dispersos em múltiplos documentos e planilhas, tornando a busca por informações específicas lenta e propensa a erros.`,
        solucao: ` O sistema visa transformar o processo atual, que é manual e descentralizado, em uma fonte de dados organizada que reduza o tempo de busca e o risco de inconsistências no uso de versões obsoletas, apoiando a equipe de administradores e visualizadores. A plataforma permitirá que os administradores cadastrem, editem e organizem os requisitos normativos, técnicos e de engenharia em uma interface web intuitiva. Os visualizadores poderão acessar essas informações de forma rápida, utilizando filtros e buscas avançadas para localizar requisitos específicos. Além disso, a plataforma oferecerá recursos de correlação entre diferentes requisitos, permitindo que os usuários compreendam as interdependências e impactos das normas em seus projetos.`,
        tipoSistema: "web",
        linkRepo: "https://github.com/OmniDevsOficial/API-Akaer",
        tecnologias: [
            { nome: "React", onde: "Criação da interface e componentes do usuário" },
            { nome: "HTML & CSS", onde: "Estrutura e estilização das páginas da plataforma web" },
            { nome: "TypeScript", onde: "Interatividade, requisições à API e renderização dos gráficos" },
            { nome: "Prisma", onde: "Intermediário para interação com o banco de dados" },
            { nome: "MySQL", onde: "Armazenamento dos dados processados do Censo" },
            { nome: "Git", onde: "Versionamento do código e colaboração em equipe" }
        ],
        papelScrum: "Scrum Master",
        contribuicoes: `Neste projeto atuei como Scrum Master e fui responsável pela gestão do backlog, organização das sprints e facilitação das reuniões do time.`,
        hardSkills: [
            { tech: "React", nivel: "ajuda" },
            { tech: "HTML & CSS", nivel: "autonomia" },
            { tech: "TypeScript", nivel: "autonomia" },
            { tech: "Prisma", onde: "ajuda" },
            { tech: "MySQL", nivel: "ajuda" },
            { tech: "Git", nivel: "autonomia" }
        ],
        softSkills: [
            {
                skill: "Resolução de problemas",
                exemplo: `Durante o desenvolvimento da plataforma, identifiquei um conflito entre as dependências do projeto, que estava causando erros de compilação. Realizei uma análise detalhada e implementei uma solução que envolveu a atualização das versões das bibliotecas e a reconfiguração do arquivo de build, resolvendo o problema de forma eficiente.`
            },
            {
                skill: "Comunicação",
                exemplo: `Em uma reunião de sprint planning, um membro do time expressou dúvidas sobre a priorização de uma user story. Usei minha habilidade de comunicação para explicar os critérios de priorização baseados no valor para o cliente e na complexidade técnica, facilitando o entendimento e alinhamento do time em relação às prioridades do projeto.`
            }
        ]
    },
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
// 2) FUNÇÃO + REPETIÇÃO — renderiza projetos simples
// ============================================

function renderizarProjetos() {
    const container = document.getElementById("lista-projetos");
    container.innerHTML = "";

    for (let i = 0; i < projetos.length; i++) {
        const p = projetos[i];

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
// 4) FUNÇÃO — renderiza projetos API
// ============================================

const NIVEL_LABEL = {
    "ouvi": "ouvi falar",
    "ajuda": "faço com ajuda",
    "autonomia": "faço com autonomia",
    "ensino": "consigo ensinar"
};

const NIVEL_CLASS = {
    "ouvi": "nivel-ouvi",
    "ajuda": "nivel-ajuda",
    "autonomia": "nivel-autonomia",
    "ensino": "nivel-ensino"
};

function escaparHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function renderizarProjetosAPI() {
    const container = document.getElementById("lista-projetos-api");
    if (!container) return;
    container.innerHTML = "";

    projetosAPI.forEach((p) => {

        let techRows = "";
        p.tecnologias.forEach(t => {
            techRows += `
                <tr>
                    <td>${escaparHTML(t.nome)}</td>
                    <td>${escaparHTML(t.onde)}</td>
                </tr>`;
        });

        let hsItems = "";
        p.hardSkills.forEach(h => {
            const nivel = h.nivel || h.onde || "ajuda"; // fallback caso venha campo errado
            const cls = NIVEL_CLASS[nivel] || "nivel-ajuda";
            const label = NIVEL_LABEL[nivel] || nivel;
            hsItems += `
                <div class="api-hs-item">
                    <span class="api-hs-nome">${escaparHTML(h.tech)}</span>
                    <span class="api-hs-nivel ${cls}">${label}</span>
                </div>`;
        });

        let ssItems = "";
        p.softSkills.forEach(s => {
            ssItems += `
                <div class="api-ss-item">
                    <div class="api-ss-nome">${escaparHTML(s.skill)}</div>
                    <div class="api-ss-exemplo">${escaparHTML(s.exemplo)}</div>
                </div>`;
        });

        const imgHTML = p.imagemSolucao
            ? `<img src="${escaparHTML(p.imagemSolucao)}" alt="${escaparHTML(p.imagemAlt || '')}" class="api-solucao-img">`
            : "";

        container.innerHTML += `
            <div class="api-card">
                <details>
                    <summary class="api-card-header">
                        <div class="api-card-meta">
                            <span class="api-card-semestre">// ${escaparHTML(p.semestre)}</span>
                            <span class="api-card-titulo">${escaparHTML(p.titulo)}</span>
                            <span class="api-card-empresa">${escaparHTML(p.empresaParceira)}</span>
                        </div>
                        <span class="api-card-toggle">+</span>
                    </summary>

                    <div class="api-card-body">

                        <div class="api-field">
                            <span class="api-label">Problema</span>
                            <p class="api-text">${escaparHTML(p.problema)}</p>
                        </div>

                        <div class="api-field">
                            <span class="api-label">Solução <span class="api-tipo-badge">${escaparHTML(p.tipoSistema)}</span></span>
                            <p class="api-text">${escaparHTML(p.solucao)}</p>
                            ${imgHTML}
                        </div>

                        <div class="api-field">
                            <span class="api-label">Repositório</span>
                            <a href="${escaparHTML(p.linkRepo)}" target="_blank" rel="noopener" class="api-repo-link">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                </svg>
                                ${escaparHTML(p.linkRepo.replace("https://", ""))}
                            </a>
                        </div>

                        <div class="api-field">
                            <span class="api-label">Tecnologias Utilizadas</span>
                            <table class="api-tech-table">${techRows}</table>
                        </div>

                        <div class="api-field">
                            <span class="api-label">Contribuições Pessoais — papel: ${escaparHTML(p.papelScrum)}</span>
                            <p class="api-text">${escaparHTML(p.contribuicoes)}</p>
                        </div>

                        <div class="api-field">
                            <span class="api-label">Hard Skills</span>
                            <div class="api-hs-grid">${hsItems}</div>
                        </div>

                        <div class="api-field">
                            <span class="api-label">Soft Skills</span>
                            <div class="api-ss-lista">${ssItems}</div>
                        </div>

                    </div>
                </details>
            </div>
        `;
    });
}


// ============================================
// INICIALIZAÇÃO
// ============================================

exibirSaudacao();
renderizarProjetos();
renderizarCursos();
renderizarProjetosAPI();