
<img alt="ignite" src="../../images/chapter-II.jpg"/>


<h2 align="center">


</h2>



>Desenvolvimento de uma aplicação front-end web complete, usando conceitos e ferramentas importantrs no ecossistema React como Styled Components, MirageJs, Context API, hooks, axios entre outros.
<br>

---
## Conteudo

  * [Estrutura com create-react-app](#create-react-app)
  * [Styled-Components](#Styled-Components)


<br>

# create-react-app
1- Criando projeto
```sh
npx create-react-app my-app
cd my-app
npm start
```
>create-react-app é uma estrutura pré configurada de um projeto react.

Podemos usar [templates](https://create-react-app.dev/docs/custom-templates/)  exemplo(typescript)
```sh
  npx create-react-app my-app --template typescript
```
Tambem conseguimos criar nosso propio template criando um pacote npm.
 
 ## Export default
 Quando usamos o export default quem define o nome do componente nao é quem esta exportando mas sim quem esta importando.
 ```react
  export default App
 ```
 Quando usamos apenas o export por padrao quem recebe nao consegue defirnir um nome, para alterar precisamos usar 
 ```react
    import {App as novoNome } from './App';
 ```

 ## Webpack, babel etc... 
 Quando usamos o create-react-app nossas configurações não ficam mais na pasta raiz, ficam dentro da pasta de node_mudules, dentro do arquivo package.json conseguimos ver os scripts, os scripts sao os pacotes aonde estao guardadas nossas configurações. 
 > node_modules > react-scripts > configs

Temos o script chamado 'eject' que nos permite mudar alguma configuração.
> *! Quando ele é rodado uma vez não tem mais volta.*

Usando o eject ele traz todas nossas configs para pasta raiz. Quando as configs sao retiradas da pasta inicial ela nao recebe atualização de forma automatica precisamos instalar cada uma.

# Styled-Components
Biblioteca css-in-jss
```sh
  npm add styled-components
```

Primeiro precisamos importar a biblioteca
```sh
import styled from "styled-components";
```
Para criar o primeiro componente, podemos utilizar o styled que acabamos de criar seguido pelo nome da tag HTML que desejamos criar

styled.[NOME_DA_TAG]

```js
styled.button;
```

```js
const MeuBotao = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;
   <div className="App">
      <Title>Hello World</Title>
   </div>

```
Podemos definir um estilo global. Para usar na aplicação toda.
```js
export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#F0F2f5;
    --red: #E52E4D;
  }
  
  *{
    margin:0;
    padding:0;
  }
html{
  @media(max-width: 1080px){
    font-size:93.75%;//15
  }

  @media(max-width: 720px){
    font-size:87.5%;//14
  }
}
//REM  = 1rem = font-size da minha pagina 

  body{
    background:(--background);
    -webkit-font-smoothing:antialiased;//Fonte fica mais detalhatada
  }

[disabled] {
  opacity:0.6;
  cursor:not-allowed;
}
`;
```
## Dicas: 
### REM 
Vamos usar REM para definir o tamanho dos elementos, o é 
'//REM  = 1rem = font-size da minha pagina'

Entao usando media query dessa forma
```css
 @media(max-width: 1080px){
    font-size:93.75%;//15
  }

  @media(max-width: 720px){
    font-size:87.5%;//14
  }
```
O font size vai diminuir conforme a tela do usuario consequentemente o REM tambem.

Todos elementos que estejam disabled vao receber o css. 
```css
[disabled] {
  opacity:0.6;
  cursor:not-allowed;
}
```

# Front end sem back 

>Algumas vezes precisamos testar nossa aplicação porem o back end ainda não esta pronto, podemos usar ferramentas que criam um "back" dentro do nosso front para testarmos nossa aplicação.

Exemplo de duas erramentas

- MirageJS. Muito completa, um framework inteira dessas APIs fakes. Contendo até banco de dados integrado e outras features desenvolvidas
- JSON server. Bem completa e simples de utilizar

## MirageJS
Instalação
```sh
npm install miragejs 
```
Quando usamos uma api geralmente usamos um fetch + endereço da api
```js 
    fetch('endereço da minha api')
```
Quando usamos o mirage colocamos o endereço da nossa propia aplicação.

```js 
    fetch('endereço da minha aplicação')
```
importamos a função 'createServer' do miraje dentro do nosso index.tsx. 

>Chamamos a função createServer, dentro dela definimos as rotas que vamos ter na nossa API fake, Quando acontecer uma chamada do tipo get para a rota... eu vou devolver alguma coisa  

```js
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';//todas chamadas é logo depois desse endereço 
   
    //quando acontecer uma requisição do tipo get para rota 
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ]
    })
  }
})
```
# Axios
>Configurar um cliente HTTP com axios.

### Por que nao usar fetch ???
fetch precisamos colocar o endereço sempre q a gente chamar. Sempre precisamos transformar nossa reposta em JSON.

Axios
- Interceptar requisições e repostas. Conseguimos criar regras.

Instalação 
```sh
npm install axios 
```
Criamos uma pasta services(serviços de dados vão estar dentro)


Configuração
```js
import axios from 'axios';

//criando um instancia, colocamos informações padroes para nossas requisições.
export const api = axios.create({
  baseUrl: "http://localhost:3000/api",
  //Endereço que é usado em todas requisições
})
```

# React-Modal 
>Uma biblioteca que esta dentro do [reactjs](github.com/reactjs/react-modal) Ela possui algumas funcionalidades voltadas para criação de modais ex:
  * Apertar "esc" ele fecha o modal.
  * Cliando na parte de fora ele ja fecha o modal.