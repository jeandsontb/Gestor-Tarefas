<h1 align="center">
    # -- PROJETO GESTOR DE TAREFAS COM DRAG AND DROP --
</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/static/v1?label=Last%20commit&message=May&color=yellowgreen&style=for-the-badge&logo=Slack">
</p>

## 💻 Sobre o Projeto

OPENJIRA - É um projeto para gerenciar tarefas e manipular as atividades que estão sendo desempenhadas durante o processo.

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Task" title="#Task" src="https://raw.githubusercontent.com/jeandsontb/Gestor-Tarefas/main/public/screen/openjira.png?token=GHSAT0AAAAAABUBKJMGTH7OPJSHTYDJOA6MYUTZVIQ" width="400px">

  <img alt="Task" title="#Task" src="https://raw.githubusercontent.com/jeandsontb/Gestor-Tarefas/main/public/screen/openjira1.png?token=GHSAT0AAAAAABUBKJMHHIA4Y7YIF62JPYWEYUTZVXQ" width="400px">
</p>

## 💡 Como executar o projeto

- Basta clonar o repositório e abrir o arquivo index.html no seu navegador

```
 git clone https://github.com/jeandsontb/Gestor-Tarefas.git
```

- Rodar o comando

```
$ npm run install ou yarn
```

Para carregar totalmente a aplicação é necessário ter a base de dados

- Nesse projeto foi criado um ambiente docker para conexão com mongodb

```
  docker-compose up -d
```

- O -d, significa **detached**

- MongoDB URL local:

```
mongodb://localhost:27017
```

Configurar as variáveis de ambiente

```
Renomear o arquivo __.env.example__ para __.env__
colocar essa informação na variável se for para ambiente de teste local
mongodb://localhost:27017/entriesdb

```

## chamar a base de dados com as informações preliminares

- endpoint

```
http://localhost:3000/api/seed

```

Ao chamar essa rota no médoto GET, ela já vai preencher o banco com três informações

```
- Rodar o comando
$ npm run dev ou yarn dev

```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NEXT][next]
- [MATERIAL-UI][ui]
- [React][react]
- [DOCKER][docker]
- [Vscode][vscode]

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito por Jeandson Tenorio 👋🏽 [Linkedin.](https://www.linkedin.com/in/jeandson/)

[next]: https://nextjs.org/docs
[ui]: https://mui.com/pt/
[react]: https://pt-br.reactjs.org/
[vscode]: https://code.visualstudio.com/
[docker]: https://www.docker.com/
