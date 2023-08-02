import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from './AuthService';
import { Alert } from 'react-native';

export interface AuthData {
  token: any;
  email: string;
  password: string,
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
  
  async function logIn(email: string, password: string) {
    try {
      const authData = await authService.login(email, password);
        if(authData){
          setAuthData(authData);
          return authData.token
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
      const refreshData = await authService.refreshToken(token)
       if(refreshData){
        setRefresh(refreshData)
        console.log("REFRESH: ", refreshData)
        return refresh?.token
       }
    } catch (error) {
      console.log(error)
    }
  }
  
useEffect(() =>{
  const token = AsyncStorage.getItem('projectToken')
  if(token){
      const refreshToken = async () =>{
        authService.refreshToken(token)
          setTimeout(() =>{
              refreshToken()
          },
              10 * 60 * 1000)
      }
      refreshToken()
  }
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