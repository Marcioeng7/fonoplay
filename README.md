# 🗣️ FonoPlay — Treino Fonético Gamificado

Aplicação web responsiva desenvolvida como **Projeto de Extensão Universitária** do 2º período do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

## 🎯 Objetivo
Auxiliar fonoaudiólogos, pais e crianças no treino domiciliar de exercícios de fala (articulação de fonemas), substituindo listas impressas tradicionais por uma experiência lúdica, interativa e acessível diretamente pelo navegador do celular.

## ✨ Funcionalidades
* **Catálogo Amplo por Fonemas (42 exercícios):** Atividades divididas em 7 grupos de sons essenciais na terapia infantil (`/R/`, `/L/`, `/S/`, encontros consonantais `TR/PR`, `F/V`, `CH/X` e `LH/NH`), trabalhando os fonemas no início e no meio das palavras.
* **Suporte de Áudio Nativo:** Pronúncia automatizada em português (`pt-BR`) utilizando a *Web Speech API* para servir de modelo auditivo à criança.
* **Validação Assistida e Lúdica:** Três opções de controle para o adulto/profissional (**⭐ Acertou**, **🔄 Repetir** e **⏭️ Pular**), mantendo o treino leve e sem frustrações para a criança.
* **Gamificação:** Sistema de recompensa por estrelas salvo automaticamente no dispositivo (`LocalStorage`).
* **Relatório de Sessão:** Resumo gerado ao final de cada treino contendo data, fonema trabalhado, quantidade de acertos, palavras puladas e a lista exata de **palavras para reforçar** na próxima consulta.

## 🛠️ Tecnologias Utilizadas
* **HTML5** (Estrutura semântica)
* **CSS3** (Design responsivo *mobile-first* com CSS Grid)
* **JavaScript (ES6+)** (Lógica do jogo, manipulação de DOM, `Web Speech API` e `LocalStorage`)

## 🔗 Acesso ao Sistema
Acesse a aplicação funcionando diretamente pelo navegador (celular ou computador):
👉 **[Clique aqui para abrir o FonoPlay](https://github.io)**

## 📂 Estrutura do Projeto
* `index.html` — Estrutura das telas (Menu de Fonemas, Área de Exercício e Relatório Final).
* `style.css` — Estilização visual, cores e responsividade.
* `dados.js` — Banco de dados com 42 palavras e emojis organizados em 7 categorias fonéticas.
* `app.js` — Lógica de navegação, síntese de voz, pontuação e geração de relatório diagnóstico.

## 👨‍💻 Autor
Desenvolvido por **Marcio** ([@Marcioeng7](https://github.com)) — Estudante de Análise e Desenvolvimento de Sistemas (2º Período).

