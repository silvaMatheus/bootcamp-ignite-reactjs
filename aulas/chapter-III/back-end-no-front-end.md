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
  npm install faunadb
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

## Utilizando o stripe

Como o stripe possui uma key secreta na qual precisamos tomar cuidado, iremos criar uma chamada ao stripe dentro da pasta API

```js
import { NextApiRequest, NextApiResponse } from "next";
import {stripe} from '../../services/stripe';
import {getSession} from 'next-auth/client';

export default async(req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST'){
       
        //Pega o cookie daquela session 
        const session = await getSession({req});

        //Pega o email da session
        const stripeCustomer = await stripe.customers.create({
          email:session.user.email,
        })
        
        //Cria uma session dentro do stripe usando o email da session do github que esta armazenada nos cookies 
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
          customer: stripeCustomer.id,//id do stripe e nao do fauna 
          payment_method_types:['card'],//metodos de pagamento 
          billing_address_collection: 'required',//se vai ser necessario o user preencher o endereço de pagamento
          line_items: [//item e quantidade 
            {price:'price_1IlhuDHtkJ5nuPyTh7EgTvds', quantity:1}
          ],
          mode: 'subscription',//Se e uma assinatura
          allow_promotion_codes: true,//Se o usuario vai poder colocar cupons de desconto 
          success_url: process.env.STRIPE_SUCCESS_URL,//Criamos uma var no env para ficar mais organizado, url no qual o usuario é redirecionado caso tenha concluido a compra 
          cancel_url: process.env.STRIPE_CANCEL_URL
          //Url caso o user nao tenha completado a compra
        })

        return res.status(200).json( {sessionId: stripeCheckoutSession.id});//Retorna um 200 informando que esta tudo ok 
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method not allowed');
    }
}
```

## Criando o redirecionamento

Comunicar o front end com o api routes.

Podemos usar fatch mas nesse caso usamos o axios

```js
  npm install axios
```

Criamos um arquivo subscribe.ts, vai ficar responsavel por configurar o stripe

```js
import { loadStripe } from '@stripe/stripe-js'

export async function getSripeJs(){
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
  //Criamos uma var NEXT_PUBLIC_STRIPE_PUBLIC_KEY com a chave publica.
  return stripeJs;
}
```

Criamos um arquivo api.ts, vai ficar responsavel por conectar com o axios

```js
import axios from 'axios';

export  const api = axios.create({
  baseURL: '/api',
})
```

No nosso componente fazemos a comunicação com o axios fazendo a solicitação para
o stripe.

```js
const [session] = useSession();

  async function handleSubscribe(){
    if(!session){
      signIn('github');
      return;
    }

    //criação da checkout session
    try {
      const response = await api.post('/subscribe');
      //se comunica com o axios 
      const {sessionId} = response.data;

      const stripe = await getSripeJs();
      //Usamos o stripe JS para o redirecionamento para a pagina de criação 
      await stripe.redirectToCheckout({sessionId});
      //Passamos o id da session criada 
    }catch(err){
      alert(err.message);
    }
  }
```

Para gente verificar  se ja existe o usuario podemos usar o faunaDB

```js
  const user = await fauna.query<User>(
          q.Get(
            q.Match(
              q.Index('user_by_email'),
              q.Casefold(session.user.email)
            )
          )
        )

        let customerId = user.data.stripe_customer_id;

        if(!customerId){
        
        const stripeCustomer = await stripe.customers.create({
          email:session.user.email,
        })

        await fauna.query(
          q.Update(
            q.Ref(q.Collection('users'), user.ref.id),
            {
              data:{
                stripe_customer_id: stripeCustomer.id,
              }
            }
          )
        )
        customerId = stripeCustomer.id;
      }
```

# Ouvindo webhooks

  > Quando uma aplicação de terceiro avisa nossa aplicação que algum evento ocorreu
Webhook é um patter utilizado para integração de sistemas web.

Geralmente usado para sistemas de terceiros retornarem alguma informação.

Ele usa uma rota http para se comunicar com a gente. Definimos a rota no qual o sistema de terceiro pode entrar em contato conosco.

No caso do stripe precisamos configurar um end point para aonde ele vai mandar os eventos
