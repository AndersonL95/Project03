import React, { createContext, useContext, useState } from "react";
import { apiService, dataInfo } from "./ApiService";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "./Auth";

export interface inforData {
  user:[]
}
interface InforContextData {
    inforData?: inforData
    
    
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
export default InforContext




