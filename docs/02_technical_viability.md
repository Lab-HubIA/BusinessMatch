# Viabilidade Técnica — Comparativo (MVP Sebrae × Intermediário / Full V2)

## 1) Objetivo
Avaliar, sob aspectos exclusivamente técnicos, os caminhos **Sebrae (MVP)** e **Intermediário (Full V2)**, considerando arquitetura, maturidade, manutenção, estabilidade e escalabilidade.

## 2) Comparativo Estrutural
| Eixo | Sebrae (MVP) | Intermediário (Full V2) | Avaliação |
|---|---|---|---|
| Arquitetura | Flask simples + HTML único | Flask modular + Postgres + CI/CD | V2 superior em escala/manutenção |
| Banco de Dados | SQLite (fallback) | PostgreSQL (Neon) validado | V2 |
| Segurança | Parcial (Talisman/bcrypt) | JWT/CORS/Helmet (com ajustes) | V2 |
| UX/UI | Intuitivo porém estático | SPA responsiva/modular | V2 |
| Logs/QA | Manual | Automatizável (n8n/Actions) | V2 |

## 3) Indicadores Probabilísticos
- **Estabilidade em produção:** Sebrae ≈ 55–60% | V2 ≈ 85–90%  
- **Complexidade de manutenção:** Sebrae alta | V2 média-baixa  
- **Prontidão de integração (APIs/Cloud):** Sebrae parcial | V2 alta

## 4) Diagnósticos de Referência
- `docs/diagnostics/target_audit.txt`  
- `docs/diagnostics/intermedio_tree.txt`  
- `docs/diagnostics/intermediario-summary.txt`

## 5) Conclusão (Técnica)
A **Full V2** é tecnicamente **mais adequada** a produção: modular, com persistência real e segurança consolidável.  
O MVP Sebrae é útil para *sandbox* de UX e demonstrações, mas não é base ideal de operação contínua.
