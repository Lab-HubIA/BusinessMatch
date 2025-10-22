# Estrutura de Execução — Business Match V2 (Full)

## 1) Objetivo
Definir a estrutura de time híbrido (IA + humano), cronograma, caminho crítico, dependências e gestão de riscos.

## 2) Times e Papéis
- **Líder humano**: aprova GO/NO-GO, fornece evidências e resolve bloqueios externos.  
- **Orquestração/PMO (IA)**: consolida inputs → plano diário (tarefas, critérios, riscos).  
- **Backend/DevSecOps (IA)**: hardening (CORS/JWT/Helmet), smoke tests, tuning Postgres.  
- **Frontend/UX (IA)**: quick-wins de UX, microcópias, navegação responsiva.  
- **QA/Relatórios (IA)**: auditoria e resumo executivo (STATUS.md).

## 3) Caminho Crítico (resumo)
1) Diagnóstico/Setup → 2) Refatoração backend → 3) Integração Frontend/UX → 4) Testes/QA → 5) Deploy/Monitoramento → 6) Validação pública.

## 4) Dependências (alto nível)
- Backend pronto para endpoints e tokens → libera UX e testes de fumaça.  
- Logs e health → alimentam QA e relatórios.

## 5) Artefatos de Apoio
- `docs/diagnostics/*` — base de evidências (usar antes de planejar sprint).  
- `docs/STATUS.md` — status contínuo (atualizado por automação).  

## 6) Riscos & Mitigação
| Risco | Impacto | Mitigação |
|---|---|---|
| Integração mock vs prod | Erros de registro/UX | Desativar mock em prod; alinhar validações |
| CORS amplo/JWT fraco | Segurança | Whitelist + exigir `JWT_SECRET` |
| Builds lentos | Prazo | Cache/Actions e rollbacks |
| Orquestração IA | Divergência | Checkpoints 2x ao dia e critérios de aceite |

## 7) Conclusão
A estrutura híbrida + automação leve garante entregabilidade no prazo, com **controle de qualidade** e **baixo risco operacional**.
