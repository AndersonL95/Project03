import React, { createContext } from "react";
import { apiService, dataInfo } from "./ApiService";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "./Auth";

export interface inforData {
  user:[]
}
export interface updateUserData {
  
  formData: FormData
}
interface InforContextData {
    inforData?: inforData
    updataData: updateUserData
    
}
const InforContext = createContext<InforContextData>({} as InforContextData);

export async function InforData() {
  const token = await AsyncStorage.getItem('projectToken');
  const refresh = await AsyncStorage.getItem('refreshToken')
  const infoData:any = await apiService.infor(refresh);
  if(infoData){
    //console.log("Token:", token)
    //console.log("RefreshToken: ", refresh)
    return infoData
  }
}
export async function UpdateUser(id:number,formData:FormData,token:any) {
  try {
    const update = await apiService.updateUser(id,formData,token)
    if(update){
      
      return update
    }
  } catch (error) {
    console.log(error)
  }
}
export async function UpdatePass(id:number,atual:string,newPassword:string,token:any){
  try{
    const updatePass = await apiService.updatePassword(id,atual,newPassword,token)
    if(updatePass){
      return updatePass
    }
  }catch (error) {
    console.log(error)
  }
}
export default InforContext




