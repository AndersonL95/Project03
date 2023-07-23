import React, {createContext, useContext, useReducer, useState} from 'react';
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
  
}
type Props = {
  children?: React.ReactNode
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();  

  
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
  
  return (
    <AuthContext.Provider value={{authData, logIn, logOut}}>
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