import React, { useContext } from 'react'
import { createStackNavigator,StackNavigationProp } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Preload from '../screens/PreLoad/Preload';
import { AuthProvider, useAuth } from '../api/Auth';
import Home from '../screens/Home/Home';
import mainTab from './mainTab';
import MainAdmTab from './mainAdmTab';
import { RouteProp } from '@react-navigation/native';
import EditUser from '../screens/EditUser/EditUser';
import EditPass from '../screens/EditUser/EditPass';


const Stack = createStackNavigator();

type StackNavigation = {
    PreLoad: undefined;
    Login: undefined;
    MainTab: undefined
    AdminTab: {id:number,name:string,email:string,cargo:string,verified:boolean, picture:any,password:string},
    EditUser: any /**Buscar outra forma */
    EditPass:any  /**Buscar outra forma */  
    
}
export type ParamsData = RouteProp<StackNavigation> 

export type stackTypes = StackNavigationProp<StackNavigation>

const MainStack = () => {
    return(
        <AuthProvider>
            <Stack.Navigator
                initialRouteName='Preload'
                screenOptions={{
                    headerShown: false
                }}
            >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="AdminTab" component={MainAdmTab} />
            <Stack.Screen name="MainTab" component={mainTab} />
            <Stack.Screen name="EditUser" component={EditUser}/>
            <Stack.Screen name="EditPass" component={EditPass}/>

            

                


        </Stack.Navigator>
        </AuthProvider>
        
 
    )
    
}
export default MainStack