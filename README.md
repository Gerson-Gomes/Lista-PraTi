
# Guia de Execução de Programa JavaScript com Node.js e `prompt-sync`

Este guia explica como executar um programa JavaScript usando Node.js e a biblioteca prompt-sync para entrada de dados no console.

# Pré-requisitos
1. **Node.js**: Certifique-se de que o Node.js está instalado em seu sistema. Você pode verificar a instalação e a versão com o comando:

```bash
node-v
```

Caso não esteja instalado, você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

2. **Editor de Código** : Qualquer editor de código de sua preferência, como VSCode, Sublime Text, ou mesmo um editor de texto simples.

# Passos para Configuração e Execução
1. **Crie o Projeto e Instale Dependências**

- Crie um diretório para o seu projeto e acesse-o:

```bash
mkdir meu-projeto
cd meu-projeto
```
- Inicialize um novo projeto Node.js com o comando `npm init` e siga as instruções. Isso criará um arquivo `package.json`:

```bash

npm init -y
```
- Instale a biblioteca `prompt-sync` usando npm:

```bash
npm install prompt-sync
```
2. **Crie o Arquivo do Programa**

- Crie um arquivo chamado `app.js` no diretório do projeto e adicione o código JavaScript. Aqui está um exemplo simples que usa `prompt-sync` para ler a entrada do usuário:

```javascript
// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita a entrada do usuário
const nome = prompt('Qual é o seu nome? ');

// Exibe uma mensagem de saudação
console.log(`Olá, ${nome}! Bem-vindo ao programa.`);
```
3. Execute o Programa

- No terminal, execute o programa com o Node.js:

```bash
node app.js
```
- Você será solicitado a inserir seu nome, e o programa responderá com uma mensagem de saudação.

# Resolução de Problemas
- Problema: `Error: Cannot find module 'prompt-sync'`

  - Solução: Certifique-se de ter instalado a biblioteca `prompt-sync` e que está listada nas dependências do seu `package.json`. Tente reinstalar com `npm install`.
- Problema: Comando `node` não encontrado

 - Solução: Verifique se o Node.js está corretamente instalado e se o caminho para o executável do Node está incluído na variável de ambiente PATH.
# Recursos Adicionais
- [Documentação do Node.js](https://nodejs.org/docs/latest/api/)
- [Documentação da biblioteca prompt-sync](https://www.npmjs.com/package/prompt-sync)
