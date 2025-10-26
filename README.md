# 🧠 Business Match — WebApp V2

Plataforma de conexão inteligente entre empresas e oportunidades de negócio.  
Projeto mantido sob coordenação de **Diego Smorigo** e automação de suporte por IA (Jarvis + auxiliares).

---

## 📂 Estrutura
| Pasta | Descrição |
|--------|------------|
| `docs/diagnostics/` | Evidências e auditorias técnicas |
| `docs/` | Documentos executivos e status |
| `sql/` | Schema do banco (Neon) |
| `public/` | Frontend (HTML/JS) |
| `server.js` | Backend Node.js (API REST) |

---

## 📄 Documentos Executivos
| Documento | Descrição |
|------------|------------|
| [`docs/01_technical_report.md`](docs/01_technical_report.md) | Diagnóstico técnico e arquitetura atual |
| [`docs/02_technical_viability.md`](docs/02_technical_viability.md) | Comparativo Sebrae × Intermediário |
| [`docs/03_financial_viability.md`](docs/03_financial_viability.md) | Análise financeira e cenários de custo |
| [`docs/04_project_structure.md`](docs/04_project_structure.md) | Estrutura de execução, IAs e cronograma |
| [`docs/STATUS.md`](docs/STATUS.md) | Painel dinâmico de progresso |

---

## 🚀 Tecnologias
- Backend: Node.js / Express  
- Banco: PostgreSQL (Neon)  
- Infra: Render + GitHub + UptimeRobot  
- Automação: n8n / GitHub Actions  
- IA de Apoio: Jarvis, Gemini, Claude, DeepSeek

---

## 🧩 Execução local
    npm install
    npm start
Backend em: http://127.0.0.1:3000  
Healthcheck: /__whoami

---

## 🌐 Ambientes
- Produção: https://BusinessMatch.onrender.com  
- Banco Neon: ep-small-morning-a8fwfil4-pooler.eastus2.azure.neon.tech  
- Repositório: https://github.com/ds-hubia/BusinessMatch

---

## 🧭 Equipe e Funções
| Papel | Responsável | Tipo |
|--------|--------------|------|
| Coordenação Técnica | Diego Smorigo | Humano |
| Orquestração / PMO | Jarvis | IA |
| IA de Análise | Gemini, DeepSeek | IA |
| IA de Escrita Técnica | Claude | IA |
| IA de Pesquisa | GPT-5 | IA |

---

> Licença: MIT • © 2025 — Business Match Project
