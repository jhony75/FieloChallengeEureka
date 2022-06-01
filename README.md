# Fielo Challenge Eureka

## Objetivo

Este projeto visa completar a "Eureka Challenge" proposta pela Fielo como uma forma de avaliação de nível.

Sendo uma Single Page Application, devem ser renderizados na tela um header, com o nome "new roots" e três cards, users list, user data e user activities respectivamente.

Toda a aplicação deve ser responsiva.

## Escolhas

Utilizei React para a construção do projeto, criando manualmente as configurações do Webpack e Babel. A ferramenta "create-react-app" não foi utilizada.

Para estilos preferi usar SASS por não ver a necessidade de utilizar "styled-components" por conta do seu peso.

Commits foram feitos seguindo os padrões de [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Dependencias

**Axios** Utilizado para fazer as chamadas de API.

**React Query** Utilizado para criar um cache das respostas da API e gerenciar algumas variaveis globais. Por exemplo: guardar que a chamada de autorização retornou com sucesso para que outras chamadas possam acontecer depois.

**Babel e Webpack** Utilizados para "buildar", minificar e compilar o projeto de forma que ele possa rodar de forma correta em diversos navegadores.

**ESLint e Prettier** Aplicam padrões de código em todo o projeto.

**Jest** Biblioteca de testes.

**loaders** Dependencias para que os estilos possam ser compilados de forma correta (sass) e aplicados ao bundle.

## Commandos

`yarn` Instala os pacotes necessários.

`yarn start:dev` Roda o projeto e observa alterações no código.

`yarn build` Prepara o projeto para deploy.

`yarn test` Roda os testes do projeto (arquivos terminados em .test.js).

## Partes incompletas e alterações

### Alterações

A API do Bing respondia com um erro de CORS, então utilizei outra API que redireciona o link para a imagem do dia do bing.

### Partes incompletas

#### Testes

Tive dificuldade em criar os testes. Nunca antes testei código de front end e por questões de tempo e conhecimento, optei por não seguir com TDD/BDD. Por essa razão, até o momento, o código não contém testes.

#### Render de componentes

Não consegui encontrar a tempo uma forma de ordenar as chamadas de API. Por conta disso, a autorização não necessáriamente rodava antes das outras chamadas, o que resultava nos mais diversos erros.
