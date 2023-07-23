import { View, Text } from 'react-native'
import React from 'react'
import { HomeContainer, TopSection } from './style';
import { StatusBar } from 'expo-status-bar';
import { MyButton } from '../../components/Buttons/MyButton';
import { useAuth } from '../../api/Auth';

export default function Home() {
  const {logOut} = useAuth();
  return (
        <HomeContainer>
          <Text>Home Admin</Text>        
        </HomeContainer>
      
  )
}