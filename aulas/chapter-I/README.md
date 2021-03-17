<img alt="ignite" src="../../images/chapter-I.jpg" />
<h2 align="center">

</h2>

>Estrutura base de uma aplicação React,
>Webpack, Babel, Webpack Dev server, SASS,Source Maps, Fast Refresh
>Conceitos importantes do React como componentes, propriedades, estados e hooks além de aplicar o .TypeScript no nosso projeto para adicionar tipagem estática à aplicação.
---


## Conteudo

* [Configurando ambiente ](#ambiente)
* [Babel](#babel)
* [WebPack](#webPack)
* ### Conceitos importantes
  * [Componentes](#componentes)
  * [Propiedades](#propiedades)
  * [Status](#status)
* [Fast Refresh no webpack](#fast-Refresh)
* [Chamadas HTTP](#Chamadas-HTTP)
* [TypeScript](#TypeScript)

</br>

# Ambiente
1- Iniciar um repositorio
  'npm  init -y'
>Cria o arquivo package.json, aonde fica salvo as informações do nosso projeto, name, version, main, license, dependencias...

2-Instalamos o react ('npm add react')
> Ele cria node_modules aonde armazena o codigo das dependencias que foram instaladas na nossa aplicação.

3-Instalar 'react-dom'('npm add react-dom')
> O react-dom permite trabalhar com react na web, ele converte o html em uma sintaxe de obj, ele permeite q o ?
> react se comunique com a arvore de elementos do html.

4-Criar uma pasta src(source)
>Todo codigo criado por nos fica guardado dentro desta pasta

5-Criar uma pasta public
>Assest/arquivos publicos, index.html, icones, qualquer arquivo q precise ser acessado por meio externo


<br>


# BABEL
>"Babel uma poderosa ferramenta para aplicar transformações em código a nível de AST. Você pode fazer isso com outras ferramentas, mas essa é bem mais conveniente. Você pode não perceber, mas você já está usando transformações AST quando escreve ES6 ou JSX".

### Install
- npm add @babel/core @babel/cli @babel/preset-env -D 
>Quando usamos o **"-D"** ele identifica que é uma dependencia de desenvolvedor e que nãoo vai ser utilizado quando o projeto for para produção.
* ```@Babel/core``` 99% do babel esta dentro dele.
* ```babel/cli``` comando para conseguir usar ele no terminal
* ```babel/preset-env``` identifica qual ambiente nossa aplicação esta sendo rodada para converter o codigo da melhor forma possivel.
Depois criamos um arquivo babel.config.js aonde vai ficar a nosa configuração do babel.
```js 
module.exports = {
  presets:[
    '@babel/presets-env'
  ]
}
````
Para converte um arquivo usamos o ```npx babel src/index.js --out-file dist/bundle.js```


* npx babel - inicia o comando do babel 
* src/index.js - arquivo que queremos converter 
* ---out-file indica qual o lugar que vai ser salvo o codigo convertido 
* dist cria uma pasta e bundle.js é o arquivo aonde vai estar salvo o nosos codigo convertido

<br>

# Webpack 
>Com o WebPack conseguimos importar dentro do nosso arquivos outros arquivos css,arquivos de imagem, .sass ...

>Ele vai estipular series de configurações"loaders" que vai ensinar para nossa aplicação como tratar cada tipo de arquivo que é importado.

### Install 
- npm webpack webpack-cli -D 

Depois criamos um arquivo "webpack.config.js" aonde iremos fazer algumas configurações. 

```js
const path = require('path');

module.exports ={
entry:path.resolve(__dirname, 'src', 'index.jsx'),
output:{
path:path.resolve(__dirname, 'dist'),
filename: 'bundle.js'
},
resolve:{ 
extensions:['.js', '.jsx'],
},
module:{
rules: [
  { 
    test: /\.jsx$/, //verifica com expresão regular se o arquivo é um js 
    exclude: /node_modules/,
    use:'babel-loader',
  }
],
}
```
<br>

# Conceitos importantes
## Componentes
> São formas da gente encapsular codigos dentro de um elemento, tendo sua propia estrutura dentro dele. 
### Algumas convenções 
* Sao funções que começam com a primeira letra maiscula e devolve um HTML.
Sempre um componente sempre por arquivo

<br>

Dentro de um componente conseguimos usar js de maneira facil com html
Dentro das tags usando "{nome da var}"
```js
const headerTitle = 'text';

export function RepositoryList(){
return (
    <section className="repository-list">
    <h1>{headerTitle}</h1>
    </section>
  )
}
```
<br>

## Propiedades

>Propiedades funcionam como atributos dentro de tags html, conseguimos passar valores para o componente funcionar de forma diferente.
```js
   <nossoComponente nossoAtributo="unform2" />
```
```js 
export  function nossoComponente(props){
  return (
      <strong>{props.nossoAtributo}</strong>
    )
  }
```
**Props**
>Conseguimos acessar todas propiedades que um componente recebe atravez dos argumentos da função, o react coloca todas propiedades dentro de um argumento chamado props.

<br>

Conseguimos criar um objeto para juntar as propiedades e assim passar de uma so vez para o componente.
```js 
const  meuObjetoDePropiedades ={
  prop1:"info",
  prop2:true,
}
  <nossoComponente nossoAtributo={meuObjetoDePropiedades}/>
```
<br>

## Status

Uma forma de conseguir ter variaveis que quando elas alterarem na aplicação vao refletir na interface.

* UseState é um hook, ele fica monitorando quando uma var tem seu valor alterado e renderiza novamente o html que a chama. 
### Convenção 
Usamos sempre set+var na função que vai alterar o valor dar var. 
```js 
import {useState} from 'react';
export function Counter(){

  const [counter, setCounter] = useState(0); 

  function increment(){
    setCounter(counter +1);
  }
  return(
    <div>
        <h2>{counter}</h2>
        <button 
          onClick={increment} 
          type="button">
          Increment</button>
    </div>
  )
}
```

## Imutabilidade 
>A var nao pode ter seu valor alterado diretamente.
```js
  comidas = ['arroz','feijão'];
  
  comidas.push('carne');//Dessa forma estamos alterando direatamento o array.

  novoCardapio = [...comidas, 'carne']//Dessa forma estamos criando um novo array, no caso o array principal nao teve seu valor alterado diretamente.
```
<br>

## Fast-Refresh

### Install
Conseguimos usar a [documentação](https://github.com/pmmmwh/react-refresh-webpack-plugin)para nos auxiliar a instalar 
- npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh

>Dentro do nosso webpack criamos uma var com o nome do plugin 

```js
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-pligin')

devServer {
  ...
  hot:true
}

plugins:[
    isDevelopment && new ReactRefreshWebpackPlugin()
    ...
].filter(Boolean;)

use:{
  ...
  options:[
    isDevelopment && require,resolve('react-refresh/babel')
  ].filter.(Boolean)
}
```

<br>

# Chamadas-HTTP 
Usamos [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) para acessar API do github para listar repositorios.
* useEffect para monitorar quando um valor é alterado 
>  useEffect(qual função quero executar, valor que foi alterado);
```js
 const [repositories, setRepositories] = useState([])
 //useState retorna um valor para a variavel que vai ser alterada
 
 useEffect( ()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(reponse=> reponse.json())
    .then(data=> setRepositories(data));//transforma em json e depois salva no data, depois cria um novo array
  }, [])
```
* *Nunca deixar o useEffect sem o segundo parametro, ele vai ficar em looping e tambem nunca alterar o valor que ele esta monitorando dentro dele*

Usamos o map para ele retornar algo, usamos ele para retornar nosso componente. 
ele retorna cada repositorio e em seguida chama o nosso componente passando nossa propiedade para ele montar o item.
>Key - Precisamos de uma informação unica para cada repetição
```js 
 {repositories.map(repository =>{
        return <RepositoryItem key={repository.name} repository={repository}/>
      })}
```

<br>

# TypeScript

TypeScript adiciona funcionalidades que nativamente não estão disponíveis ou requerem grande esforço para utilização, como tipagem de dados e Orientação a Objetos. 

>obs: Sempre definimos o tipo/interface com letra maicusula.

Em type declaramos nossas regras, podemos escolher quais informações nosso objeto precisa receber e qual o tipo de dados que cada atributo do nosso objeto vai receber, podemos deixar nao obrigatorio aquele atributo usando o **"?"** 
```js 
type User =  {
  name:string
  year:number
  anddress:{
    city:string
    state?:string
  }
}
function showWelcome(user: User){
  return `Welcome ${user.name}, you live in ${user.address.city}`;
}
```
> interface é mais usada para heranças.
