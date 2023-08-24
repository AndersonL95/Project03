import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from './AuthService';
import { Alert } from 'react-native';

export interface AuthData {
  token: any;
  email: string;
  password: string,
  user:{}
}

interface AuthContextData {
  authData?: AuthData;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  refreshToken: (token:any) => Promise<void>
  
}
type Props = {
  children?: React.ReactNode
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();  
  const [refresh,setRefresh] = useState<AuthData>()
  
  async function logIn(email: string, password: string,user:{}) {
    try {
      const authData = await authService.login(email, password, user);
        if(authData){
          setAuthData(authData);
          //console.log(authData.user)
          return authData.user
        }else {
          return console.log("ERROR!")
        }
    } catch (err) {
      Alert.alert(err +'Tente novamente');
    }
  }
  async function logOut() {
    setAuthData(undefined);
    AsyncStorage.removeItem('projectToken');
  }
  async function refreshToken(token:any){
    try {
      if(token !=0){
        const refreshData = await authService.refreshToken(token)
        if(refreshData){
          setRefresh(refreshData)
        return refresh?.token
       }
      }
    } catch (error) {
      console.log("ERRO:", error)
    }
  }

useEffect(()=>{
  
      const refreshToken = async () =>{
        const token = await AsyncStorage.getItem('projectToken')

        authService.refreshToken(token)
          setTimeout(() =>{
              refreshToken()
          },
              10 * 60 * 100)
      }
      refreshToken()
  
},[])
  return (
    <AuthContext.Provider value={{authData, logIn, logOut, refreshToken}}>
      {children}
    </AuthContext.Provider>
  );
};



export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}


/** */