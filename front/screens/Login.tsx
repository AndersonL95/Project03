import React,{ FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { container } from "../components/shared";
import { colors } from "../components/colors";
import logo from '.././assets/logo.png';
import { TextInput } from "react-native";

const LoginContainer = styled(container)`
    background-color: ${colors.white};
    justify-content: center;
    width: 100%;
    height: 100%;
`;
const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`;
const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;
const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex:1;
`;

const Login: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light"/>
            <LoginContainer>
                <TopSection>
                <TopImage source={logo}/>
                </TopSection>
                <TextInput
                    
                    placeholder="useless placeholder"
                
      />
                <BottomSection></BottomSection>
            </LoginContainer>
        </>
    )
}
export default Login;