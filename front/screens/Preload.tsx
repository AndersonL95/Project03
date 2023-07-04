import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { container } from '../components/shared';
import { styled } from 'styled-components/native';
import { colors } from '../components/colors';
import Background from '.././assets/background.png';
import Animation1 from '.././assets/animation1.gif';

const Container = styled(container)`
    width: 100%;
    height: 100%;
    justify-content: center;
`;
const BackgroundImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

`
const ImageGif = styled.Image`
    width: 200px;
    height: 200px;
    
`
export default function Preload() {
  return (
    <Container>
        <BackgroundImage source={Background}>
            <ImageGif source={Animation1}/>
        </BackgroundImage>
        
        
    </Container>
  )
}