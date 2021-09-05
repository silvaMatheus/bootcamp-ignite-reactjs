import faker from 'faker';
import { createServer, Factory, Model } from 'miragejs';

type User = {
  name: string;
  email: string;
  create_at: string;
}
export function makeServer() {
  const server = createServer({

    models: {
      //eles precisam mas nao todos os campos
      user: Model.extend<Partial<User>>({})
    },

    //gerar dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    seeds(server) {
      server.createList('user', 10)
    },

    routes() {

      this.namespace = 'api';
      this.timing = 2000;
      //delay para carregar nossos dados

      //Ele vai entender que sempre q eu chamar /users ele vai trazer a listagem de usuarios
      //Shorthands

      this.get('/users');

      //vai criar um usuario
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  })
  return server;
}

// CRUD
