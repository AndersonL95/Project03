import styled from "styled-components/native";
import { colors } from "../colors";

export const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;
export const TabAreaAdmin = styled.View`
    height: 60px;
    background-color: ${colors.primary};
    flex-direction: row;
`;
export const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

export const ProfileIcon = styled.Image`
    width: 25px;
    height: 25px;
    border-radius: 12px;
`;
export const ImageIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`
export const StudentIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`
export const NewsIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`