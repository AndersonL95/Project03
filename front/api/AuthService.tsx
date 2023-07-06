import axios from "axios";
import { createContext, useState } from "react";

const API_URL = "http://localhost:5000/user/";

interface AuthData {
  token: string,
  email: string,
  password: string
};
interface AuthContextData {
  authData: AuthData,
  login: (email: string, password: string) => Promise<AuthData> 
  logout: () => Promise<void>
};
export const AuthContext = createContext<AuthContextData>( 
  {} as AuthContextData);
export const AuthProvider: React.FC = ({children}) => {
  const [authData,setAuthData] = useState()

  function Login() {

  }
  function Logout () {

  }
  return (
    <AuthContext.Provider value={{authData, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

