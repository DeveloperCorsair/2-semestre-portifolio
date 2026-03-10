// ============================================
// DADOS BASE — projetos e cursos
// ============================================

const projetosBase = [
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

const cursosBase = [
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
// SENHA ADMIN — troque pelo que quiser
// ============================================
const SENHA_ADMIN = "henrique@admin";

// ============================================
// ESTADO — carrega do localStorage ou usa base
// ============================================

let projetos    = projetosBase;
let cursos      = cursosBase;
let textos      = {
    subtitulo: "// Desenvolvedor de Software",
    descricao: "Desenvolvedor full stack apaixonado por criar interfaces que encantam e sistemas que escalam. Transformo ideias em código limpo e produtos que funcionam de verdade.",
    sobreMim:  "Sou um desenvolvedor <strong>full stack</strong> baseado em São Paulo com mais de 3 anos de experiência construindo produtos digitais do zero até a produção."
};
let habilidades = {
    frontend: [
        { nome: "React",          pct: 70 },
        { nome: "Java Script",    pct: 75 },
        { nome: "CSS / Tailwind", pct: 88 }
    ],
    backend: [
        { nome: "Node.js",    pct: 82 },
        { nome: "Python",     pct: 70 },
        { nome: "TypeScript", pct: 75 }
    ]
};

let adminLogado = false;

// ============================================
// SAUDAÇÃO POR HORÁRIO (if/else)
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
// RENDERIZAÇÃO — projetos
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

        const btnRemover = adminLogado
            ? `<button class="admin-btn-remover" onclick="removerProjeto(${i})">✕ Remover</button>`
            : "";

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
                ${btnRemover}
            </div>
        `;
    }
}

// ============================================
// RENDERIZAÇÃO — cursos
// ============================================

function renderizarCursos() {
    const container = document.getElementById("lista-cursos");
    container.innerHTML = "";

    for (let i = 0; i < cursos.length; i++) {
        const c = cursos[i];
        const isUltimo = i === cursos.length - 1;

        const btnRemover = adminLogado
            ? `<button class="admin-btn-remover admin-btn-remover--sm" onclick="removerCurso(${i})">✕</button>`
            : "";

        container.innerHTML += `
            <div class="curso-item" ${isUltimo ? 'style="border-bottom:none"' : ''}>
                <div class="curso-col-esq">
                    <div class="curso-nome">${c.nome}</div>
                    <div class="curso-provider">${c.provider}</div>
                </div>
                <div class="curso-col-dir">
                    <span class="curso-hora">${c.horas}</span>
                    <span class="curso-ano">${c.ano}</span>
                    ${btnRemover}
                </div>
            </div>
        `;
    }
}

// ============================================
// RENDERIZAÇÃO — textos
// ============================================

function renderizarTextos() {
    const elSubtitulo = document.querySelector(".subtitulo");
    const elDescricao = document.getElementById("descricao");
    const elSobre     = document.querySelector("#text-sobre-mim p");

    if (elSubtitulo) elSubtitulo.textContent = textos.subtitulo;
    if (elDescricao) elDescricao.textContent  = textos.descricao;
    if (elSobre)     elSobre.innerHTML        = textos.sobreMim;
}

// ============================================
// RENDERIZAÇÃO — habilidades
// ============================================

function renderizarHabilidades() {
    const containerFront = document.getElementById("hab-frontend");
    const containerBack  = document.getElementById("hab-backend");
    if (!containerFront || !containerBack) return;

    function gerarItens(lista, grupo) {
        let html = "";
        for (let i = 0; i < lista.length; i++) {
            const h = lista[i];
            const btnRemover = adminLogado
                ? `<button class="admin-btn-remover admin-btn-remover--inline" onclick="removerHabilidade('${grupo}', ${i})">✕</button>`
                : "";
            html += `
                <div class="hab-item">
                    <span class="hab-nome">${h.nome}</span>
                    <div class="hab-barra">
                        <div class="hab-linha" style="width:${h.pct}%;animation-delay:${i * 0.1}s"></div>
                    </div>
                    <span class="hab-porcentagem">${h.pct}%</span>
                    ${btnRemover}
                </div>
            `;
        }
        return html;
    }

    containerFront.innerHTML = gerarItens(habilidades.frontend, "frontend");
    containerBack.innerHTML  = gerarItens(habilidades.backend,  "backend");
}

// ============================================
// EASTER EGG — clique triplo no © do footer
// ============================================

function configurarEasterEgg() {
    const footerCopy = document.getElementById("footer-copy");
    let cliques = 0;
    let timer;

    footerCopy.addEventListener("click", () => {
        cliques++;
        clearTimeout(timer);

        if (cliques === 3) {
            cliques = 0;
            if (adminLogado) {
                abrirPainelAdmin();
            } else {
                abrirModalLogin();
            }
        }

        timer = setTimeout(() => { cliques = 0; }, 700);
    });
}

// ============================================
// MODAL DE LOGIN
// ============================================

function abrirModalLogin() {
    document.getElementById("modal-login").style.display = "flex";
    document.getElementById("input-senha").value = "";
    document.getElementById("login-erro").style.display = "none";
    setTimeout(() => document.getElementById("input-senha").focus(), 100);
}

function fecharModalLogin() {
    document.getElementById("modal-login").style.display = "none";
}

function tentarLogin() {
    const senha = document.getElementById("input-senha").value;

    if (senha === SENHA_ADMIN) {
        adminLogado = true;
        fecharModalLogin();
        renderizarProjetos();
        renderizarCursos();
        renderizarHabilidades();
        abrirPainelAdmin();
    } else {
        document.getElementById("login-erro").style.display = "block";
        document.getElementById("input-senha").value = "";
        document.getElementById("input-senha").focus();
    }
}

// ============================================
// PAINEL ADMIN
// ============================================

function abrirPainelAdmin() {
    document.getElementById("painel-admin").style.display = "flex";
    trocarAba("aba-projetos");
}

function fecharPainelAdmin() {
    document.getElementById("painel-admin").style.display = "none";
}

function logout() {
    adminLogado = false;
    fecharPainelAdmin();
    renderizarProjetos();
    renderizarCursos();
    renderizarHabilidades();
}

function trocarAba(abaId) {
    document.querySelectorAll(".admin-aba-conteudo").forEach(el => el.style.display = "none");
    document.querySelectorAll(".admin-aba-btn").forEach(el => el.classList.remove("ativa"));
    document.getElementById(abaId).style.display = "block";
    document.querySelector(`[data-aba="${abaId}"]`).classList.add("ativa");
}

// ============================================
// AÇÕES — Projetos
// ============================================

function adicionarProjeto() {
    const emoji     = document.getElementById("proj-emoji").value.trim()  || "💡";
    const titulo    = document.getElementById("proj-titulo").value.trim();
    const link      = document.getElementById("proj-link").value.trim()   || "#";
    const descricao = document.getElementById("proj-desc").value.trim();
    const techs     = document.getElementById("proj-techs").value.trim();

    if (!titulo || !descricao) { alert("Título e descrição são obrigatórios."); return; }

    projetos.push({
        emoji, link, linkLabel: "Github ↗", titulo, descricao,
        tecnologias: techs ? techs.split(",").map(t => t.trim()) : []
    });

    localStorage.setItem("projetos", JSON.stringify(projetos));
    renderizarProjetos();
    ["proj-emoji","proj-titulo","proj-link","proj-desc","proj-techs"].forEach(id => document.getElementById(id).value = "");
    mostrarFeedback("✓ Projeto adicionado!");
}

function removerProjeto(i) {
    if (!confirm(`Remover "${projetos[i].titulo}"?`)) return;
    projetos.splice(i, 1);
    localStorage.setItem("projetos", JSON.stringify(projetos));
    renderizarProjetos();
}

// ============================================
// AÇÕES — Cursos
// ============================================

function adicionarCurso() {
    const nome     = document.getElementById("curso-nome").value.trim();
    const provider = document.getElementById("curso-provider").value.trim();
    const horas    = document.getElementById("curso-horas").value.trim()     || "—";
    const ano      = document.getElementById("curso-ano-input").value.trim() || "2025";

    if (!nome || !provider) { alert("Nome e instituição são obrigatórios."); return; }

    cursos.push({ nome, provider, horas, ano });
    localStorage.setItem("cursos", JSON.stringify(cursos));
    renderizarCursos();
    ["curso-nome","curso-provider","curso-horas","curso-ano-input"].forEach(id => document.getElementById(id).value = "");
    mostrarFeedback("✓ Curso adicionado!");
}

function removerCurso(i) {
    if (!confirm(`Remover "${cursos[i].nome}"?`)) return;
    cursos.splice(i, 1);
    localStorage.setItem("cursos", JSON.stringify(cursos));
    renderizarCursos();
}

// ============================================
// AÇÕES — Textos
// ============================================

function salvarTextos() {
    const sub   = document.getElementById("txt-subtitulo").value.trim();
    const desc  = document.getElementById("txt-descricao").value.trim();
    const sobre = document.getElementById("txt-sobre").value.trim();

    if (sub)   textos.subtitulo = sub;
    if (desc)  textos.descricao = desc;
    if (sobre) textos.sobreMim  = sobre;

    localStorage.setItem("textos", JSON.stringify(textos));
    renderizarTextos();
    mostrarFeedback("✓ Textos salvos!");
}

// ============================================
// AÇÕES — Habilidades
// ============================================

function adicionarHabilidade() {
    const grupo = document.getElementById("hab-grupo").value;
    const nome  = document.getElementById("hab-nome-input").value.trim();
    const pct   = parseInt(document.getElementById("hab-pct").value);

    if (!nome || isNaN(pct) || pct < 1 || pct > 100) {
        alert("Nome e porcentagem (1–100) são obrigatórios.");
        return;
    }

    habilidades[grupo].push({ nome, pct });
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
    renderizarHabilidades();
    document.getElementById("hab-nome-input").value = "";
    document.getElementById("hab-pct").value = "";
    mostrarFeedback("✓ Habilidade adicionada!");
}

function removerHabilidade(grupo, i) {
    habilidades[grupo].splice(i, 1);
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
    renderizarHabilidades();
}

// ============================================
// FEEDBACK
// ============================================

function mostrarFeedback(msg) {
    const el = document.getElementById("admin-feedback");
    el.textContent = msg;
    el.style.opacity = "1";
    setTimeout(() => { el.style.opacity = "0"; }, 2500);
}

// ============================================
// INICIALIZAÇÃO
// ============================================

exibirSaudacao();
renderizarTextos();
renderizarProjetos();
renderizarCursos();
renderizarHabilidades();
configurarEasterEgg();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("input-senha").addEventListener("keydown", e => {
        if (e.key === "Enter") tentarLogin();
    });
});