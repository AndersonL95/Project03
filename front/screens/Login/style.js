import styled from 'styled-components/native';
import { container } from "../../components/shared";
import { colors } from '../../components/colors';


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
export const BottomSection = styled.View`
    width: 100%;
    padding: 0px 25px 0px 25px;
    flex:1;
`;