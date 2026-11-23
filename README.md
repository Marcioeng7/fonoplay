# 🗣️ FonoPlay — Treino Fonético Gamificado

Aplicação web responsiva desenvolvida como **Projeto de Extensão Universitária** do 2º período do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

## 🎯 Objetivo
Auxiliar fonoaudiólogos, pais e crianças no treino domiciliar de exercícios de fala (articulação de fonemas), substituindo listas impressas tradicionais por uma experiência lúdica, interativa e acessível diretamente pelo navegador do celular.

## ✨ Funcionalidades
* **Catálogo Amplo por Fonemas (42 exercícios):** Atividades divididas em 7 grupos de sons essenciais na terapia infantil (`/R/`, `/L/`, `/S/`, encontros consonantais `TR/PR`, `F/V`, `CH/X` e `LH/NH`), trabalhando os fonemas no início e no meio das palavras.
* **Suporte de Áudio Nativo:** Pronúncia automatizada em português (`pt-BR`) utilizando a *Web Speech API* para servir de modelo auditivo à criança.
* **Gamificação:** Sistema de recompensa por estrelas salvo automaticamente no dispositivo (`LocalStorage`).
* **Relatório de Sessão:** Resumo gerado ao final de cada treino (data, fonema, acertos e tentativas) para acompanhamento da evolução pelo fonoaudiólogo.

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
* `app.js` — Lógica de navegação, síntese de voz, pontuação e geração de relatório.

## 👨‍💻 Autor
Desenvolvido por **Marcio** ([@Marcioeng7](https://github.com)) — Estudante de Análise e Desenvolvimento de Sistemas (2º Período).
