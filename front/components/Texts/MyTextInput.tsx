import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { TextInputProps, StyleSheet, TextInput } from "react-native";


const styles = StyleSheet.create({
    input: {
     borderRadius: 15,
     borderColor: "#ff3232",
     backgroundColor:"#f6f6f6",
     color: "#111",
     borderWidth: 1,
     width: "100%",
     height: 60,
     marginBottom: 15,
     fontSize:18,
     paddingHorizontal: 15,
    }
})
    
type props ={
    value:string,
    name:string,
    onChangeText:any
    placeholder:string
    keyboardType: any
    onSubmitEditing:any
}

export function MyTextInput(props:props){
    return (
        <TextInput placeholderTextColor="#999"{...props} style={styles.input}/>
    ) 
}
/*export function MyTextInput(props: TextInputProps) {
    return (
        <TextInput  placeholderTextColor="#999" style={styles.input} {...props}  />
    )
}*/