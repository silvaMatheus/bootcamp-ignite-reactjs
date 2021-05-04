# Back end no front end

### Api Routes  

Podemos criar uma pasta api, automaticamete todos arquivos dentro dessa pasta se tornam rotas.

users.ts

```js
//Request = Todos dados que estamos recebendo da nossa requisição 
//reponse = Qual a resposta 
//Podemos tipar usando o propio next
import {NextApiRequest, NextApiResponse} from 'next';

    export default(request:NextApiRequest,response:NextApiResponse) =>{
      const users ={}
    }
```

# Metodos de autenticação

* Para aplicações de pequeno porte é aconcelhavel usar JWT, ele é salvo no storage e podemos colocar uma data de expiração.
* Next Auth(sistema simples, usar login de terceiros, não queremos armazenar informações de usuarios). Cognito, Auth0, autenticações externas.
  
## nextAuth

Criamos um arquivo [...nextauth].ts dentro de pages/api/auth.

Instalamos o next-auth

```bash
  npm install next-auth
```

Podemos instalar a tipagem

```bash
  @types/next-auth -D 
```

Dentro do arquivo [...nextauth].ts

```ts
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'

export default NextAuth({
  providers:[
    Providers.Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENTE_SECRET
      scope:'read:users'
    }),
  ],
})
```

  **No github precisamos criar uma aplicação.**

  No nosso arquivo env precisamos salvar algumas informações.

  ```
  GITHUB_CLIENT_ID = id gerado no github
  GITHUB_CLIENT_SECRET = secret key gerada no github 
  ```

### Criando botao de login

No nosso componente aonde queremos efetuar o login do usuario

```js
import {signIn, useSession, signOut} from 'next-auth/client'
/*
useSession = Vai retornar se o usuario tem uma Sessão valida ou nao
signIn = recebe por parametro qual serviço de autenticação iremos usar 
singOut = vai deslogar de todas as sessões 
*/

//Usuario esta logado ou nao 
const [session] = useSession();

// nextauth podemos ter varias autenticações, facebook, spotify...

<button type="button" onClick={() => singOut()}> 
  SingOut
</button>

<button type="button" onClick={() => ('github') }>
  Sign in with github
</button>

```

### FAUNADB

Precisamos configurar nossa conta no [Fauna](https://fauna.com/) e em seguida instalar o SDK

```js
  install faundadb
```

No nosso arquivo env precisamos colocar a  key gerada no fauna

```js
  FAUNADB_KEY=fnAEIVsEnnACAzsZmD1vWIUSx8WWU2_a9smugvxx
```

Dentro da pasta de services criamos um arquivo para o fauna, por la que ele vai fazer a comunicação.

``` js
import {Client} from 'faunadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,//key gerada no fauna 
}) 

```

Usamos o next-auth, ele facilita a autenticaçõa de terceiros.

```js
import { query as q } from 'faunadb';

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers:[
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:users'//qual tipo de informação vamos querer 
    })
  ],
  callbacks: {
    async signIn(user, account, profile){
      const {email} = user;
      //Nessa query ele verifica se ja existe um usuario criado com aquele email, caso exista ele nao faz nada, caso nao exista ele adiciona. 

      // O email foi pego pelo next-auth aonde ele se comunicou com o github 

      try {
        await fauna.query(
         q.If(
           q.Not(
             q.Exists(
               q.Match(
                 q.Index('user_by_email'),
                 q.Casefold(user.email)
               )
             )
           ),
           q.Create(
             q.Collection('users'),
             {data: {email} }
           ),
           q.Get(
             q.Match(
               q.Index('user_by_email'),
               q.Casefold(user.email)
             )
            )
          )
        )
          return true
        } catch {
          return false
        }
      },
    }
})
```
