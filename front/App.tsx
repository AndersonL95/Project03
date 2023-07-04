import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Login from './screens/Login';
import MainStack from './stacks/mainStack';


export default function App() {
  
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}

