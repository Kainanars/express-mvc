# Express MVC Application

Este é um exemplo de aplicação MVC (Model-View-Controller) usando Express.js.

## Estrutura do Projeto

```
/Kainanars/express-mvc
├── app.js
├── package.json
├── /controllers
│   └── exampleController.js
├── /models
│   └── exampleModel.js
├── /routes
│   └── exampleRoutes.js
└── /views
  └── exampleView.ejs
```

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/Kainanars/express-mvc.git
```

2. Navegue até o diretório do projeto:

```sh
cd express-mvc
```

3. Instale as dependências:

```sh
npm install
```

## Uso

1. Inicie o servidor:

```sh
npm start
```

2. Abra o navegador e acesse `http://localhost:3000`.

## Estrutura MVC

- **Model**: Define a estrutura dos dados e interage com o banco de dados.
- **View**: Define a interface do usuário e exibe os dados.
- **Controller**: Gerencia a lógica da aplicação e interage com os Models e Views.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch:

```sh
git checkout -b feature/nova-feature
```

3. Faça suas alterações e commit:

```sh
git commit -m 'Adiciona nova feature'
```

4. Envie para o repositório remoto:

```sh
git push origin feature/nova-feature
```

5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
