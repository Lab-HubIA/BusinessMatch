# Viabilidade Financeira — Business Match (Full V2)

## 1) Premissas
WebApp Full V2 (Flask/Neon/Render/Azure), monitoramento e automação leve; uso de IAs sob demanda. Parâmetro: **eficiência, eficácia e prazo**.

## 2) Cenários
### A) “Quase Grátis” (≥90% free)
- Stack: Render Free, Neon Free, UptimeRobot Free, GitHub Free; n8n self-host.  
- **Implantação:** rápida; **Risco:** médio (cold start/limites). **Estabilidade esperada:** 70–75%.

### B) “Até 60% Free” (equilíbrio)
- Stack: Render Starter / Azure B1, Neon Free (pooling), logs básicos, n8n.  
- **Implantação:** rápida; **Risco:** baixo–médio. **Estabilidade:** 85–90%. **Recomendado.**

### C) “Combinação Livre”
- Stack: Azure App Service/Render Pro, Neon Standard, observability melhor.  
- **Implantação:** curta–média; **Risco:** baixo; **Estabilidade:** 90–95%.

## 3) Sensibilidade
Tráfego, crescimento do DB, retenção de logs e uso de IA influenciam gastos. Limitar execuções, usar cache, e alinhar região com o Neon reduz custos.

## 4) Conclusão (Financeira)
Para entrar em produção leve com boa percepção de qualidade e baixo risco, o cenário **B** apresenta o melhor **custo/benefício** e mantém o caminho para escalar a **C**.
