<img alt="ignite" src="../../../images/chapter-II.jpg" />
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