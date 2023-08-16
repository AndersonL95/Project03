import axios from "axios";
import { inforData, updateUserData } from "./ServiceApi";
import { Alert } from "react-native";


  
export interface dataInfo {
    data: {
        data: Array<inforData>
    }
  }
  
  const infor = async (token:any):Promise<inforData> =>{
    const api = axios.create({
      baseURL: 'http://10.0.2.2:5000/user/',
      timeout: 2000,
      headers:{
        'Authorization': token,
        'Accept': 'application/json',
        "Content-Type": "application/json"
  
      }
    })
    return new  Promise((resolve, reject) =>{
       api.get(`infor`)
      .then((res)=>{
        if(res.data){
          resolve({
            user: res.data
          })
          
        }else {
          reject(new Error('credenciais incorretas'));
            console.log("Error!")
        }
        //console.log(res.data)
        return res.data

    })

  }
)}
const updateUser = async (id:number, formData:FormData, token:any):Promise<updateUserData> =>{
  const api = axios.create({
    baseURL: 'http://10.0.2.2:5000/user/',
    timeout: 2000,
    headers:{
      'Authorization': token,
      'Content-Type': 'multipart/form-data'


    }
  })
  return new Promise((resolve,reject)=>{
    api.put(`edit/${id}`,formData,{
     
    }).then((res) =>{
      if(res.data){
        resolve({
          
          formData:formData
        })
        return res.data
      }else {
        reject(new Error('Algo de errado'));
        console.log("Error!")
    }
    }).catch(function (error) {
      console.log('MEUERRO',JSON.stringify(error))
    });
  })
}
  
const updatePassword = async(id:number,atual:string,newPassword:string,token:any) =>{
  const api = axios.create({
    baseURL: 'http://10.0.2.2:5000/user/',
    timeout: 2000,
    headers:{
      'Authorization': token,
    }
  })
  return new Promise((resolve,reject)=>{
    api.put(`editPass/${id}`,{
      atual,
      newPassword
    }).then((res)=>{
      if(res.data){
        resolve({
          atual:atual,
          newPassword: newPassword
        });
        console.log(res.data)
          return res.data
      }else {
        reject(new Error("Erro ao alterar senha"));
          console.log("Error!")
      }
    }).catch(function (error) {
      console.log('MEUERRO',JSON.stringify(error))
      Alert.alert('Senha atual invalida.')
    });
  })
}
export const apiService = {

    infor,
    updateUser,
    updatePassword
}
