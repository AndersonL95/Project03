import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Preload from '../screens/Preload';


const Stack = createStackNavigator();
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