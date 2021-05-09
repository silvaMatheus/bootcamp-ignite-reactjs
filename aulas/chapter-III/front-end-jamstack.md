# JAMstack

Javascript
API
Markup

___  

# CMS (Content management System)

- Wordpress Podemos usar API
x Drupal
x Joomla
- Magento (E-commerce)

> Headeless CMS( Paienl administrativo + API HTTP, GraphQL, SDK);

Gratuitos

- Strapi (Qualquer conteudo para pequenos projetos)
- Ghost (Blog)
- Keystone (Qualquer conteudo)

Pagos

- GraphCMS
- Prismic CMS
- Contentful(Voltado para empresas)
-
- Shopify - Commerce
- Saleor - Commerce

## Prismic

> Configuração
>
Precisamos acessar o site do prismic e configurar, podemos definir que nosos posts vão ser aberto para todos ou que eles irao precisar uma chave para acessar....

No nosso arquivo env criamos mais uma var.

```env
PRISMIC_ACCESS_TOKEN=MC5ZSlkzSUJJQUFDWUFsUWJN.77-9PT7vv71bWu-_vUfvv73vv73vv73vv73vv73vv73vv73vv73vv70hJ--_vQZ7bRVMCyMoIu-_ve-_ve-_vQ
```

Podemos acessar a API de algumas formas, Rest API ou GraphQL.

No services criamos um arquivos prismic.ts e instalamos o cliente para integrear

```bash
  npm install @prismicio/client
```

Depois importamos para dentro do nosso arquivo prismic.ts.

```js
import Prismic from '@prismicio/cliet'

export function getPrismicClient(req?:unknow){
  const prismic = Prismic.client(
    process.env.PRISMIC_ACCESS_TOKEN,
    {
      req,
      accessToken: process.env.PRISMIC_ACESS_TOKEN
    }
  )
  return prismic;
}

```

Dentro do nosso arquivo de post precisamos carregar as postagens

```js
import {getStaticProps} from 'next';
import {getPrismicClient} from '../../services/prismic';
import Prismic from '@prismicio/client'

 export const getStaticProps : GetStaticProps = async () =>{
   const prismic = getPrismicClient();

   const response = await prismic.query([
      Prismic.predicates.at('document.type', 'navigation'),  
   ],{
     fetch:['publication.title', 'publication.content']
      pageSize: 100,
   })
    console.log(response);
   return {
     props :{

     }
   }
} 

```
