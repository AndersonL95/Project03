import React,{ FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import { LoginContainer, TopSection, TopImage, BottomSection, MiddleSetion } from "./style";
import logo from '../../assets/logo.png';
import { TextInput } from "react-native";
import { MyTextInput } from "../../components/Texts/MyTextInput";
import { MyButton } from "../../components/Buttons/MyButton";



const Login: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light"/>
            <LoginContainer>
                <TopSection>
                    <TopImage source={logo}/>
                </TopSection>
                <MiddleSetion>
                    <MyTextInput placeholder="E-mail" />
                    <MyTextInput placeholder="Senha" />
                </MiddleSetion>
                <BottomSection>
                    <MyButton title="Entrar"/>
                </BottomSection>
            </LoginContainer>
        </>
    )
}
export default Login;