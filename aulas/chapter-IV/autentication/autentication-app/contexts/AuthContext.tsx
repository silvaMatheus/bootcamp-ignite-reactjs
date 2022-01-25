import Router from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

type User = {
  email: string;
  permissions: string[]
  roles: string[]
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthTenticated: boolean;

}

type AuthProviderProps = {
  children: ReactNode; // Type for component receive anything 
}

export const AuthContext = createContext({} as AuthContextData)
export function signOut() {
  destroyCookie(undefined, 'nextauth.token')
  destroyCookie(undefined, 'nextauth.refreshToken')

  Router.push('/')
}
export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<User>()
  const isAuthTenticated = !!user;

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password
      })
      const { token, refreshToken, permissions, roles } = response.data

      //Context da requisição, nao vai existir no client apenas no server do next 
      //Nome do cookie
      //Valor que queremos salvar 

      setCookie(undefined, 'nextAuth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      setCookie(undefined, 'nextAuth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, //Tempo que o cookie vai ficar salvo no navegador 
        path: '/' //Qual caminho da minha aplicação vai ter acesso a esse cookie, com o "/" estou falando que todos caminhos vão ter acesso 
      })

      setUser({
        email,
        permissions,
        roles,
      })

      api.defaults.headers['authorization'] = `bearer ${token}`
      // Setando o valor do bearer 

      Router.push('/dashboard')

      console.log(response.data)
    } catch (e) {
      signOut()
    }

  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthTenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
