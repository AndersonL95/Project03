import React from 'react'
import { createStackNavigator,StackNavigationProp } from '@react-navigation/stack';
import Login from '../screens/Login';
import Preload from '../screens/PreLoad/Preload';


const Stack = createStackNavigator();

type StackNavigation = {
    PreLoad: undefined;
    Login: undefined;
}
export type stackTypes = StackNavigationProp<StackNavigation>

const MainStack = () => {
    return(
        <Stack.Navigator
            initialRouteName='Preload'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
 
    )
    
}
export default MainStack