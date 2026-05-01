'use client'
import { AuthResponse, UserAuthType } from "@/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";

type AuthContextType = {
    user: UserAuthType | null;
    token: string | null;
    register: (Username: string, Email: string, Password: string) => void,
    login: (Email:string, Password: string) => void,
    setSession: (token: string, user: UserAuthType) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const router = useRouter()
    const [user, setUser] = useState<UserAuthType | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const stored = localStorage.getItem('token');
        if(stored) {
          setLoading(false);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('token', String(token))
    },[token])

    const register =  async (username: string, email: string, password: string) => {
     setLoading(true);
     console.log(`Payload: {${username}, ${email}, ${password}}`)
     if(username.length === 0 || email.length === 0 || password.length === 0) {
        setLoading(false);
        throw new Error('Faltan campos obligatorios')
     }
     await api
       .post<AuthResponse>(`/auth/register`, {
          username,
          email,
          password
        })
        .then((e) => {
          setUser(e.data.user);
          setToken(e.data.token);
          document.cookie= "accessPermited=true; path=/"
          router.push('/')
       })
       .catch((e) => {
          setError(`Error al registrar: ${e}`);
          console.log(error);
       })
       .finally(() => {
          console.log('se ha llegado al finaly')
          setLoading(false);
       });

    }

     const login =  async (email: string, password: string) => {
     setLoading(true);
        console.log(`Payload: {${email}, ${password}}`)
         if(email?.length === 0 || password?.length === 0) {
        setLoading(false);
        throw new Error('Faltan campos obligatorios')
     }
     await api
       .post<AuthResponse>(`/auth/login`, {
                email,
                password
            })
        .then((e) => {
         setUser(e.data.user);
         setToken(e.data.token);
         document.cookie= "accessPermited=true; path=/"
         router.push('/')
       })
       .catch((e) => {
         setError(`Error al loggear: ${e}`);
         console.log(error);
       })
       .finally(() => {
        
         setLoading(false);
       });

    }

    const setSession = (token: string, user: UserAuthType) => {

    }

    const logout = () => {
        localStorage.removeItem('token');
        document.cookie= "accessPermited=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
        setToken(null);
        setUser(null);
        router.push('/authentication')
    }
    return (
        <AuthContext.Provider value={{user, token, register, login, setSession, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("Estás fuera del proveedor")
    }
    return context;
}