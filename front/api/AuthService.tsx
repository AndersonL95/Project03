import axios from "axios";
import { AuthData } from "./Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


const api = axios.create({
	baseURL: 'http://10.0.2.2:5000/user',
	timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
      },
});


const login = (email: string, password: string, user:{}):Promise<AuthData> =>{
    
    return new  Promise((resolve, reject) =>{
            api.post('/login',{
                email,
                password
            }).then((res) =>{
                if (res.data) {
                    AsyncStorage.setItem('projectToken', (res.data.projectToken));
                    resolve({
                        token: AsyncStorage.getItem('projectToken'),
                        email: email,
                        password: password,
                        user: res.data
                    });
                    return res.data;
                }else {
                    reject(new Error('credenciais incorretas'));
                    console.log("Error!")
                }
            }).catch(function (error) {
                Alert.alert('Tente novamente');
                console.log(JSON.stringify(error))
              });
            
            
            console.log()
            
          
    })
    
}
const refreshToken = (token:any):Promise<AuthData> =>{
    //const token = AsyncStorage.getItem('projectToken')
    return new  Promise((resolve, reject) =>{
    if(token){
        api.get('/refresh_token').then(async (res) =>{
            if(res.data){
                resolve(token)
            //console.log("REFRESHTOKEN: ", res.data.projectToken)
            AsyncStorage.setItem('refreshToken',(res.data.projectToken))
            return token
        }else {
            reject(
                new Error('credenciais incorretas'));
                    console.log("Error!")
            
        }
        }).catch(function (error) {
            console.log(JSON.stringify(error))
          });
    }
})
}
    export const authService = {
    login,
    refreshToken
    
}


