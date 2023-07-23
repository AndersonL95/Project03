import React, { createContext, useContext, useState } from "react";
import { apiService, dataInfo } from "./ApiService";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface inforData {
  user:[]
}
interface InforContextData {
    inforData?: inforData
    
    
}
const InforContext = createContext<InforContextData>({} as InforContextData);

export async function InforData() {
  const token = await AsyncStorage.getItem('projectToken')
  const infoData:any = await apiService.infor(token);
  if(infoData){
    return infoData
  }


}
export default InforContext




  /** try {
      if(token){
        const infoData:any = await apiService.infor(token);
        if(infoData != null){
            console.log("DATA:"+ infoData)
            //console.log(token)
          return infoData
        }else {
          return console.log("ERROR! ")
        }
      }
    } catch (err) {
      console.log("ERROR: "+err)
      Alert.alert(err +'Tente novamente');
    } */