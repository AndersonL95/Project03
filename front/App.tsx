import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Login from './screens/Login/Login';
import MainStack from './stacks/mainStack';
import { AuthProvider } from './api/Auth';


export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </AuthProvider>
      
  
    
  );
}

