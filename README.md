# Next.js OpenJira App

Para carregar totalmente a aplicação é necessário ter a base de dados

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

```

## chamar a base de dados com as informações preliminares

- endpoint

```
http://localhost:3000/api/seed

```
