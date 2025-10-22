# Relatório Técnico — Web App “Business Match” (Consolidado v1)

## 1) Escopo e Contexto
Este documento consolida o estado técnico do **Web App Business Match** (versão Full V2 como direção), incluindo arquitetura, status atual, ambientes, rotas, frontend, segurança, problemas e riscos. Evidências e auditorias estão em:  
- `docs/diagnostics/target_audit.txt`  
- `docs/diagnostics/intermedio_tree.txt`  
- `docs/diagnostics/intermediario-summary.txt`  

## 2) Arquitetura Atual
- **Backend ativo**: Node.js/Express (Render) com autenticação JWT, segurança mínima (helmet, cors, rate limit), pool `pg` para Postgres (Neon).  
- **Data Layer**: Neon PostgreSQL com schema (`users`, `opportunities`, `matches`; `tags` em `JSONB`).  
- **Rotas principais**:  
  - `/api/auth/register`, `/api/auth/login`  
  - `/api/opportunities` (GET/POST)  
  - `/api/matches` (GET)  
- **Frontend**: SPA estática (HTML+JS); modo demo `?mock=1` intercepta `fetch`.  
- **Healthcheck**: `GET /__whoami`.

## 3) Ambientes
- **Local**: macOS (bash 3.2), Node 24.x.  
- **Render (prod)**: serviço estável; porta dinâmica; health via `/__whoami`.  
- **Neon**: conexão validada; `sql/init.sql` aplicado.  
- **UptimeRobot**: a configurar para `/__whoami`.

## 4) Achados Relevantes (diagnósticos)
- **Alinhamento front/back**: mock do front exige campos (ex.: CNPJ) que **não** são exigidos pelo backend (causa de erro em produção).  
- **Interceptação de `fetch`** com `?mock=1`: pode mascarar chamadas reais.  
- **CORS** liberado global: recomenda-se **whitelist**.  
- **JWT_SECRET** com fallback (“dev-demo-secret”): exigir via variável de ambiente.  
- **Legado Flask (Sebrae/Intermediário)**: erros de marcação HTML/CSS e redundâncias; útil como referência de UX, porém requer normalização.

## 5) Riscos e Mitigações
| Risco | Impacto | Mitigação |
|---|---|---|
| Mock ativo em prod | Bloqueio de rotas/UX inconsistente | Remover `?mock=1` em prod; alinhar validações |
| CORS amplo | Superfície de ataque desnecessária | Whitelist de domínios oficiais |
| JWT fraco | Autenticação comprometida | Exigir `JWT_SECRET` via env e rotação |
| Portas em uso (dev) | Conflitos de instância | Script de start/stop e `PORT` padronizado |
| Legado HTML/CSS | Regressões visuais | Normalizar HTML5; consolidar CSS |

## 6) Conclusão Técnica
A base atual é **funcional** e **pronta para estabilização**. Os impedimentos concentram-se em:  
(1) alinhamento front/back (mock vs produção), (2) CORS/JWT de produção, (3) higiene do repositório.  
A Full V2 (Flask + Postgres + CI/CD) é o caminho para robustez, reaproveitando UX do legado com normalização.
