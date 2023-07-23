import axios from "axios";
import { inforData } from "./ServiceApi";


  
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
  

export const apiService = {

    infor
}
