import styled from 'styled-components/native';
import { container } from "../../components/shared";
import { colors } from '../../components/colors';
import { MyTextInput } from '../../components/Texts/MyTextInput';


export const LoginContainer = styled(container)`
    background-color: ${colors.white};
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const TopSection = styled.View`
    width: 100%;
    height: 40%;
    justify-content: center;
    align-items: center;
    background-color: beige;
    
`;
export const TopImage = styled.Image`
    width: 50%;
    height: 70%;
    
`;
export const MiddleSetion = styled.View`
    width: 90%;
    height: 30%;
    align-items: center;
    justify-content: center;
    margin-top: 10%;

`;
export const PasswordArea = styled.View`
    width: 100%;
    height: 70px;
    flex-direction: row;
    flex: 1;
`
export const PassInput = styled(MyTextInput)`
    width: 100%;
    height: 60px;
    border: 1px solid ${colors.primary};
    border-radius: 15px;
    font-size: 18px;
    padding-left: 15px;
    color: #111;
    

`
export const BottomSection = styled.View`
    width: 100%;
    padding: 0px 25px 0px 25px;

`;